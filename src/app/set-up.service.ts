import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Schedule} from "./schedule";
import {Role} from "./role";
import {User} from "./user";
import {Guid} from "guid-typescript";
import {UserRole} from "./user-role";

@Injectable({
  providedIn: 'root'
})
export class SetUpService {

  private static readonly API_URL: string = environment.apiUrl + "/SetUp";

  constructor(private httpClient: HttpClient) {
  }

  getAllRoles():Observable<Role[]>
  {
    return this.httpClient.get<Role[]>(SetUpService.API_URL + "/GetAllRoles");
  }

  PostRoles(role : string):Observable<Role>
  {
    return this.httpClient.post<Role>(SetUpService.API_URL + "/PostRoles", role);
  }

  getAllUsers():Observable<User[]>
  {
    return this.httpClient.get<User[]>(SetUpService.API_URL + "/GetAllUsers");
  }

  AddUserToRole(userRole : UserRole):Observable<UserRole>
  {
    return this.httpClient.post<UserRole>(SetUpService.API_URL + "/AddUserToRole/", userRole);
  }

  getUserRoles(name:string):Observable<any>
  {
    return this.httpClient.get(SetUpService.API_URL +"/GetUserRoles?userName="+name);
  }

  RemoveUserFromRole(userRole : UserRole):Observable<any>
  {
    return this.httpClient.delete(SetUpService.API_URL + "/RemoveUserFromRole/" + userRole);
  }
}
