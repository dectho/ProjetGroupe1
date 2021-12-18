import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Artist} from "../../artist";
import {Music} from "../../music";
import {ArtistService} from "../../artist.service";
import {Guid} from "guid-typescript";
import {MusicService} from "../../music.service";
import {Schedule} from "../../schedule";
import {ScheduleService} from "../../schedule.service";
import {ArtistCreate} from "../../artist-create";

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  @Output() artistCreated : EventEmitter<ArtistCreate> = new EventEmitter<ArtistCreate>();

  form:FormGroup = this.fb.group({
    stageName : ['', Validators.required],
    musicName : ['', Validators.required],
    linkMusic : ['', Validators.required],
    scheduleStart : ['', Validators.required],
    scheduleEnd : ['', Validators.required]
  });

  constructor(private fb : FormBuilder, private scheduleService : ScheduleService, private musicService : MusicService, private artistService : ArtistService) { }

  ngOnInit(): void {

  }

  emitArtistCreation() {

    let guidMusic : Guid = Guid.create();
    let guidSchedule : Guid = Guid.create();
    //let guidArtist : Guid = Guid.create();

    let music = <Music>{
      id: guidMusic,
      title: this.form.value.musicName,
      link: this.form.value.linkMusic
    };

    let schedule = <Schedule>{
      id: guidSchedule,
      scheduleStart: this.form.value.scheduleStart,
      scheduleEnd: this.form.value.scheduleEnd
    };

    // let  artiste = <Artist>{
    //   id: guidArtist,
    //   stageName: this.form.value.stageName,
    //   idMusic:guidMusic,
    //   idSchedule:guidSchedule
    // };

//    this.musicService.create(music).subscribe();


//    this.scheduleService.create(schedule).subscribe();

    // this.artistService.create(artiste).subscribe();



    this.artistCreated.next({
      stageName:this.form.value.stageName,
      music : music,
      schedule : schedule
    });
  }


}
