import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventType} from "./event-bus/event-type";
import {EventBusService} from "./event-bus/event-bus.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy{
  title = 'ProjetGroupe1';

  constructor(private eventBus:EventBusService) {
  }

  ngOnInit(): void {
    let token : any = localStorage.getItem("token");
    if(token == null)
    {
      this.eventBus.next({
        type: EventType.DISCONNECTED,
        data:null
      });
    }
    else
    {
      this.eventBus.next({
        type: EventType.ADMIN_CONNECTED,
        data:token
      });
    }
  }

  ngOnDestroy():void
  {

  }
}
