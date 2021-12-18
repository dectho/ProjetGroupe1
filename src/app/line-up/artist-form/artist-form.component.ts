import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Artist} from "../../artist";
import {Music} from "../../music";
import {ArtistService} from "../../artist.service";
import {Guid} from "guid-typescript";
import {MusicService} from "../../music.service";
import {Schedule} from "../../schedule";
import {ScheduleService} from "../../schedule.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  @Output() artistCreated : EventEmitter<Artist> = new EventEmitter<Artist>();

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

    /*let guidMusic : Guid = Guid.create();
    let guidSchedule : Guid = Guid.create();
    let guidArtist : Guid = Guid.create();*/

    let music = <Music>{
      title: this.form.value.musicName,
      link: this.form.value.linkMusic
    };

    let schedule = <Schedule>{
      scheduleStart: this.form.value.scheduleStart,
      scheduleEnd: this.form.value.scheduleEnd
    };

    this.musicService.create(music).subscribe();
    this.scheduleService.create(schedule).subscribe();

    let listeMusic: Observable<Music[]> = this.musicService.getAll();
    //let listeSchedule: Observable<Schedule[]> = this.scheduleService.getAll();

    let guidM: Guid = Guid.createEmpty();
    //let guidS: Guid = Guid.create();

    listeMusic.subscribe(value => {
      for (let i = 0; i < value.length; i++) {
        if(value[i].title == "carnaval-song") {
          guidM = value[i].id;
          console.log(guidM);
        }
      }
    });

   /* listeSchedule.subscribe(value => {
      for (let i = 0; i < value.length; i++) {
        if(value[i].scheduleStart == schedule.scheduleStart) {
          guidS = value[i].id;
          console.log(guidS);
        }
      }
    });*/

    /*let guidMu: string = "29c48d19-63e1-4de7-97e5-08d9c24ae33f";
    let guidUnk: unknown = guidMu as unknown;
    let guidGuid: Guid = guidUnk as Guid;
    console.log(guidGuid);*/

    let guidMuS: string = "5377b98d-fb46-4199-80e1-08d9c24b06e5";
    let guidUnkS: unknown = guidMuS as unknown;
    let guidGuidS: Guid = guidUnkS as Guid;
    console.log(guidGuidS);

     let  artiste = <Artist>{
       stageName: this.form.value.stageName,
       idMusic: guidM,
       idSchedule:guidGuidS
     };

    this.artistService.create(artiste).subscribe();
  }
}
