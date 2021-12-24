import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Artist} from "../../artist";
import {Music} from "../../music";
import {ArtistService} from "../../artist.service";
import {Guid} from "guid-typescript";
import {MusicService} from "../../music.service";
import {Schedule} from "../../schedule";
import {ScheduleService} from "../../schedule.service";
import {Observable, Subscription} from "rxjs";
import {EventType} from "../../event-bus/event-type";
import {EventBusService} from "../../event-bus/event-bus.service";
import {SetUpService} from "../../set-up.service";

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  @Output() artistCreated : EventEmitter<Artist> = new EventEmitter<Artist>();
  @Input() adminConnectedBool : boolean;

  form:FormGroup = this.fb.group({
    stageName : ['', Validators.required],
    musicName : ['', Validators.required],
    linkMusic : ['', Validators.required],
    scheduleStart : ['', Validators.required],
    scheduleEnd : ['', Validators.required]
  });

  private adminConnected: Subscription | any = null;

  constructor(private fb : FormBuilder,
              private artistService : ArtistService,
              private eventBus:EventBusService,
              private setUpService : SetUpService) { }


  ngOnInit(): void {

  }

  emitArtistCreation() {


    let music = <Music>{
      title: this.form.value.musicName,
      link: this.form.value.linkMusic
    };

    let schedules = <Schedule>{
      scheduleStart: this.form.value.scheduleStart,
      scheduleEnd: this.form.value.scheduleEnd
    };

     let  artiste = <Artist>{
       stageName: this.form.value.stageName,
       music:music,
       schedules:schedules
     };

     this.artistCreated.next(artiste);
  }

  autoComplete() {
    this.form.setValue(
      {
        stageName : "Tymo",
        musicName : "We Like To Party",
        linkMusic : "https://www.youtube.com/watch?v=xRcSOLMGoc8",
        scheduleStart :"2022-07-12T12:00",
        scheduleEnd :"2022-07-12T14:00"
      }
    );
  }
}
