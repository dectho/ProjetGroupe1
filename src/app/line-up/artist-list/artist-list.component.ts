import {Component, Input, OnInit} from '@angular/core';
import {Artist} from "../../artist";
import {MusicService} from "../../music.service";
import {Guid} from "guid-typescript";
import {Music} from "../../music";
import {Schedule} from "../../schedule";
import {ScheduleService} from "../../schedule.service";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  @Input() artists : Artist[] = [];

  musics : Music [] = [];

  scheduls : Schedule[] = [];

  constructor(private musicService : MusicService, private schedulService : ScheduleService) { }

  ngOnInit(): void {
    this.getAllMusics();
    this.getAllScheduls();
  }

  private getAllMusics() {
    this.musicService.getAll().subscribe(musics => this.musics = musics);
  }

  public getMusicTitle(id : Guid) : string{
    for(let music of this.musics)
    {
      if(music.id == id)
      {
        return music.title;
      }
    }
    return "";
  }

  private getAllScheduls() {
    this.schedulService.getAll().subscribe(scheduls => this.scheduls = scheduls);
  }

  getScheduleStart(id: Guid) : Date{
    for(let schedule of this.scheduls)
    {
      if(schedule.id == id)
      {
        return schedule.scheduleStart;
      }
    }
    return new Date();
  }

  getScheduleEnd(id: Guid) : Date{
    for(let schedule of this.scheduls)
    {
      if(schedule.id == id)
      {
        return schedule.scheduleEnd;
      }
    }
    return new Date();
  }
}
