import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  //IMPORT HttpClientModule DANS APP_MODULE

  //L'URL VIENT DE LA CLASSE ENVIRONNEMENT
  //private static readonly API_URL: string = environment.apiUrl + "/UtilisateurControllers";
  //constructor(private httpClient : HttpClient) { }
}
