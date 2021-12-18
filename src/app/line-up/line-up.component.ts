import { Component, OnInit } from '@angular/core';
import {Music} from "../music";
import {MusicService} from "../music.service";
import {Artist} from "../artist";
import {ArtistService} from "../artist.service";
import {Guid} from "guid-typescript";
import {Observable} from "rxjs";


@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.css']
})
export class LineUpComponent implements OnInit {

  artists: Artist[] = [];



  constructor(private artistService : ArtistService) { }


  ngOnInit(): void {
    this.getAllArtists();
  }

  private getAllArtists() {
    this.artistService.getAll().subscribe(artists => this.artists = artists);

  }

  sendArtist(artist: Artist) {
    this.artistService.create(artist).subscribe(artist => this.artists.push(artist));
  }


}

