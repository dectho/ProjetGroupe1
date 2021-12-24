import { Component, OnInit } from '@angular/core';
import {TicketService} from "../ticket.service";
import jwt_decode from "jwt-decode";
import {Ticket} from "../ticket";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  error: string;
  errorBool: boolean;
  message: string;
  messageBool: boolean;

  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
  }

  buyTicket() {

    let token : any = localStorage.getItem("token");
    token = jwt_decode(token);
    let userName : string = token.sub;

    this.ticketService.getByUserName(userName).subscribe(value =>
    {
      this.error = "You already have a ticket";
      this.errorBool = true;
      this.messageBool = false;
    },
    error => {
      let ticket = <Ticket>{
        edition : "2022",
        nom : userName
      }
      this.ticketService.createTicket(ticket).subscribe();
      this.errorBool = false;
      this.messageBool = true;
      this.message = "Ticket purchased"
    });
  }
}
