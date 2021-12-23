import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";
import {EventType} from "../event-bus/event-type";
import {EventBusService} from "../event-bus/event-bus.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  connected : boolean = false;
  token : any;
  routeTicket: string;


  constructor(
    private router: Router,
    private eventBus:EventBusService
  ) {
  }


  ngOnInit(): void {
    this.eventBus.when(EventType.DISCONNECTED).subscribe(value => this.connected = false);
    this.eventBus.when(EventType.ADMIN_CONNECTED).subscribe(value =>
    {
      this.token = value;
      this.connected = true;
    });
    this.eventBus.when(EventType.USER_CONNECTED).subscribe(value =>
    {
      this.token = value;
      this.connected = true;
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
