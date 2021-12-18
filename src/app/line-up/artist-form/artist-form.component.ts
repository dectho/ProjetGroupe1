import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {Artist} from "../../artist";
import {Music} from "../../music";
import {ArtistService} from "../../artist.service";
import {Guid} from "guid-typescript";
import {MusicService} from "../../music.service";

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

  constructor(private fb : FormBuilder, private artistService : ArtistService, private musicService : MusicService) { }

  ngOnInit(): void {

  }

  emitArtistCreation() {

    let guidMusic : Guid = Guid.create();
    let guidSchedule : Guid = Guid.create();

    let music = <Music>{
      id = guidMusic,
      title = "a",
      link = "a"
    };


    (this.form.value.musicName, this.form.value.linkMusic);

    this.musicService.create(music).subscribe();

    this.artistCreated.next({
      stageName:this.form.value.stageName,
      idMusic: this.form.value.musicName,
      idSchedule : this.form.value.schedulEnd
    });
  }


}
