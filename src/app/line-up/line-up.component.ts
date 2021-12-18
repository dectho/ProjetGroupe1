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

  musics : Music [] = [];

  constructor(private musicService : MusicService, private artistService : ArtistService) { }


  ngOnInit(): void {
    this.getAllArtists();
    this.getAllMusics();
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

  private getAllArtists() {
    this.artistService.getAll().subscribe(artists => this.artists = artists);

  }

  private getAllMusics() {
    this.musicService.getAll().subscribe(musics => this.musics = musics);
  }
}

