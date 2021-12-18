import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Music} from "./music";
import {Schedule} from "./schedule";
import {Guid} from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  //IMPORT HttpClientModule DANS APP_MODULE

  //L'URL VIENT DE LA CLASSE ENVIRONNEMENT
  private static readonly API_URL: string = environment.apiUrl + "/Schedule";
  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Schedule[]>
  {
    return this.httpClient.get<Schedule[]>(ScheduleService.API_URL);
  }

  getById(id:Guid):Observable<any>
  {
    return this.httpClient.get(ScheduleService.API_URL +"/"+id);
  }

  create(schedule : Schedule):Observable<Schedule>
  {
    return this.httpClient.post<Schedule>(ScheduleService.API_URL, schedule);
  }

  delete(id:Guid):Observable<any>
  {
    return this.httpClient.delete(ScheduleService.API_URL + "/" + id);
  }

  update(id:Guid, schedule : Schedule)
  {
    return this.httpClient.put(ScheduleService.API_URL + "/" + id, schedule);
  }
}
