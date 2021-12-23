import { Component, OnInit } from '@angular/core';
import {Music} from "../music";
import {MusicService} from "../music.service";
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";
import {Guid} from "guid-typescript";
import {Observable} from "rxjs";
import {EventType} from "../event-bus/event-type";
import {EventBusService} from "../event-bus/event-bus.service";


@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.css']
})
export class LineUpComponent implements OnInit {

  artists: Artist[] = [];


  constructor(private artistService : ArtistService, private eventBus:EventBusService) { }


  ngOnInit(): void {
    this.getAllArtists();


  }

  private getAllArtists() {
    this.artistService.getAll().subscribe(artists => this.artists = artists);

  }

  sendArtist(art: Artist) {
    this.artistService.create(art).subscribe(artist =>
    {
      debugger;
      art.idMusic = artist.music.id;
      art.idSchedule = artist.schedules.id;
      this.artists.push(art)
    });
  }

  deleteArtist(artistDeleted: Artist) {
    this.artistService.delete(artistDeleted.id || -1).subscribe(() => {
      for (let i = 0; i < this.artists.length; i++) {
        const artist = this.artists[i];
        if (artist.id === artistDeleted.id) {
          this.artists.splice(i, 1);
          break;
        }
      }
    });
  }


}

