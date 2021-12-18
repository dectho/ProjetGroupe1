import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Music} from "./music";
import {Artist} from "./artist";
import {Guid} from "guid-typescript";
import {ArtistCreate} from "./artist-create";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  //IMPORT HttpClientModule DANS APP_MODULE

  //L'URL VIENT DE LA CLASSE ENVIRONNEMENT
  private static readonly API_URL: string = environment.apiUrl + "/Artist";
  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Artist[]>
  {
    return this.httpClient.get<Artist[]>(ArtistService.API_URL);
  }

  getById(id:Guid):Observable<any>
  {
    return this.httpClient.get(ArtistService.API_URL +"/"+id);
  }

  create(artist : ArtistCreate):Observable<Artist>
  {
    return this.httpClient.post<Artist>(ArtistService.API_URL, artist);
  }

  delete(id:Guid):Observable<any>
  {
    return this.httpClient.delete(ArtistService.API_URL + "/" + id);
  }

  update(id:Guid, artist : Artist)
  {
    return this.httpClient.put(ArtistService.API_URL + "/" + id, artist);
  }
}
