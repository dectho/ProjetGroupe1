import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {EventType} from "../event-bus/event-type";
import {EventBusService} from "../event-bus/event-bus.service";
import {SetUpService} from "../set-up.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  connected : boolean = false;
  adminConnected : boolean;
  token : any;
  routeTicket: string;


  constructor(
    private router: Router,
    private eventBus:EventBusService,
    private setUpService:SetUpService
  ) {
  }


  ngOnInit(): void {
    this.eventBus.when(EventType.DISCONNECTED).subscribe(value => {
      this.connected = false;
      this.adminConnected = false;
    });

    this.eventBus.when(EventType.CONNECTED).subscribe(value =>
    {
      this.token = value;
      this.connected = true;

      this.setUpService.getUserRoles(this.token.sub).subscribe(value =>
      {
        for(let role of value)
        {
          if(role === "Admin")
          {
            this.adminConnected = true;
          }
          else
          {
            this.adminConnected = false;
          }
        }
      });

    });

  }


  ngOnDestroy(){
    document.body.className="";
  }

  logOut() {
    localStorage.clear();
    this.eventBus.next({
      type: EventType.DISCONNECTED,
      data:null
    });
    this.router.navigate(['login']);

  }
  // If user is not connected, when he clicks on tickets he is sended to login
  checkConnected() {
    if(this.connected == true)
    {
      this.router.navigate(['tickets']);
    }
    else
    {
      this.router.navigate(['login']);
    }
  }
}
