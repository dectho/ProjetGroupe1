import { Component, OnInit } from '@angular/core';
import {Music} from "../music";
import {MusicService} from "../music.service";
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";
import {Guid} from "guid-typescript";
import {Observable} from "rxjs";
import {EventType} from "../event-bus/event-type";
import {EventBusService} from "../event-bus/event-bus.service";
import {SetUpService} from "../set-up.service";


@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.css']
})
export class LineUpComponent implements OnInit {

  artists: Artist[] = [];

  adminConnectedBool : boolean;
  token : any;


  constructor(private artistService : ArtistService,
              private eventBus:EventBusService,
              private setUpService : SetUpService) { }


  ngOnInit(): void {
    this.getAllArtists();

    this.eventBus.when(EventType.CONNECTED).subscribe(tok =>
    {
      this.token = tok;

      this.setUpService.getUserRoles(this.token.sub).subscribe(value =>
      {
        for(let role of value)
        {
          if(role === "Admin")
          {
            this.adminConnectedBool = true;
          }
          else
          {
            this.adminConnectedBool = false;
          }
        }
      });

    });
    this.eventBus.when(EventType.DISCONNECTED).subscribe(value => this.adminConnectedBool = false);



  }

  private getAllArtists() {
    this.artistService.getAll().subscribe(artists => this.artists = artists);

  }

  sendArtist(art: Artist) {
    this.artistService.create(art).subscribe(artist =>
    {
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

