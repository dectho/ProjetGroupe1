import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Guid} from "guid-typescript";
import {Ticket} from "./ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private static readonly API_URL: string = environment.apiUrl + "/Ticket";
  constructor(private httpClient : HttpClient) { }

  getAll():Observable<Ticket[]>
  {
    return this.httpClient.get<Ticket[]>(TicketService.API_URL);
  }

  getById(id:Guid):Observable<any>
  {
    return this.httpClient.get(TicketService.API_URL +"/"+id);
  }

  getByUserName(userName : string):Observable<any>
  {
    return this.httpClient.get(TicketService.API_URL +"/"+userName+"/getTicketByName");
  }

  createTicket(ticket : Ticket):Observable<Ticket>
  {
    return this.httpClient.post<Ticket>(TicketService.API_URL, ticket);
  }

  delete(id:Guid):Observable<any>
  {
    return this.httpClient.delete(TicketService.API_URL + "/" + id);
  }

  update(id:Guid, ticket : Ticket)
  {
    return this.httpClient.put(TicketService.API_URL + "/" + id, ticket);
  }
}
