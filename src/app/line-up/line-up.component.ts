import { Component, OnInit } from '@angular/core';
import {Music} from "../music";
import {MusicService} from "../music.service";


@Component({
  selector: 'app-line-up',
  templateUrl: './line-up.component.html',
  styleUrls: ['./line-up.component.css']
})
export class LineUpComponent implements OnInit {

  musics: Music[] = [];


  constructor(private musicService : MusicService) { }


  ngOnInit(): void {
    this.getAllMusics();
  }

  private getAllMusics() {
    this.musicService.getAll().subscribe(musics => this.musics = musics);
  }
}

