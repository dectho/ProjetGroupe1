import { Component, OnInit } from '@angular/core';
import {EventBusService} from "../event-bus/event-bus.service";
import {EventType} from "../event-bus/event-type";


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {

  }



}
