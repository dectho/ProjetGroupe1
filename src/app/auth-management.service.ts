import {Injectable, OnInit} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Music} from "./music";
import {User} from "./user";
import {Observable} from "rxjs";
import {EventType} from "./event-bus/event-type";
import {EventBusService} from "./event-bus/event-bus.service";
import {UserLogin} from "./user-login";

@Injectable({
  providedIn: 'root'
})
export class AuthManagementService implements  OnInit{

  private static readonly API_URL: string = environment.apiUrl + "/AuthManagement";

  token : any;

  constructor(private httpClient : HttpClient, private eventBus : EventBusService) { }

  ngOnInit() {
    this.eventBus.when(EventType.DISCONNECTED).subscribe(value => this.token = value);

    this.eventBus.when(EventType.CONNECTED).subscribe(value =>
    {
      this.token = value;
    });
  }

  login(user : UserLogin) : Observable<Request>
  {
    return this.httpClient.post<Request>(AuthManagementService.API_URL + "/login", user);
  }

  register(user : UserLogin) : Observable<Request>
  {
    return this.httpClient.post<Request>(AuthManagementService.API_URL + "/Register", user);
  }

}
