import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artist} from "../../artist";
import {MusicService} from "../../music.service";
import {Guid} from "guid-typescript";
import {Music} from "../../music";
import {Schedule} from "../../schedule";
import {ScheduleService} from "../../schedule.service";
import {Subscription} from "rxjs";
import {EventType} from "../../event-bus/event-type";
import {EventBusService} from "../../event-bus/event-bus.service";
import {SetUpService} from "../../set-up.service";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  @Input() artists : Artist[] = [];
  @Output() artistDeleted: EventEmitter<Artist> = new EventEmitter<Artist>();

  @Input() adminConnectedBool : boolean;

  musics : Music [] = [];

  scheduls : Schedule[] = [];

  private adminConnected: Subscription | any = null;



  constructor(private musicService : MusicService,
              private schedulService : ScheduleService,
              private eventBus:EventBusService,
              private setUpService : SetUpService) { }

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

  public getMusicLink(id : Guid) : string{
    for(let music of this.musics)
    {
      if(music.id == id)
      {
        return music.link;
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

  emitTodoDeletedByIndex(i:number) {
    this.artistDeleted.next(this.artists[i]);
  }
}
