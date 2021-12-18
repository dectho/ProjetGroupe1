import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {Guid} from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly API_URL: string = environment.apiUrl + "/User";
  constructor(private httpClient : HttpClient) { }

  getAll():Observable<User[]>
  {
    return this.httpClient.get<User[]>(UserService.API_URL);
  }

  getById(id:Guid):Observable<any>
  {
    return this.httpClient.get(UserService.API_URL +"/"+id);
  }

  create(user : User):Observable<User>
  {
    return this.httpClient.post<User>(UserService.API_URL, user);
  }

  delete(id:Guid):Observable<any>
  {
    return this.httpClient.delete(UserService.API_URL + "/" + id);
  }

  update(id:Guid, user : User)
  {
    return this.httpClient.put(UserService.API_URL + "/" + id, user);
  }
}
