import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Music} from "./music";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  //IMPORT HttpClientModule DANS APP_MODULE

  //L'URL VIENT DE LA CLASSE ENVIRONNEMENT
  private static readonly API_URL: string = environment.apiUrl + "/Music";
  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Music[]>
  {
    return this.httpClient.get<Music[]>(MusicService.API_URL);
  }

  getById(id:number):Observable<any>
  {
    return this.httpClient.get(MusicService.API_URL +"/"+id);
  }

  create(music : Music):Observable<Music>
  {
    return this.httpClient.post<Music>(MusicService.API_URL, music);
  }

  delete(id:number):Observable<any>
  {
    return this.httpClient.delete(MusicService.API_URL + "/" + id);
  }

  update(id:number, music : Music)
  {
    return this.httpClient.put(MusicService.API_URL + "/" + id, music);
  }
}
