import { Component, OnInit } from '@angular/core';
import {EventType} from "../event-bus/event-type";
import {EventBusService} from "../event-bus/event-bus.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
