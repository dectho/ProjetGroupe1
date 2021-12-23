import {Injectable, OnInit} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services";
import {environment} from "../../environments/environment";
import {AuthManagementService} from "../auth-management.service";
import {EventType} from "../event-bus/event-type";
import {EventBusService} from "../event-bus/event-bus.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor, OnInit {
    constructor(private authService : AuthManagementService, private eventBus : EventBusService) { }

  token : any;

  ngOnInit() {
    this.eventBus.when(EventType.ADMIN_CONNECTED).subscribe(value =>
    {
      this.token = value;
    });
    console.log(this.token);
  }

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
        request = request.clone({
        headers: request.headers.set('authorization', "Bearer " + this.token),
      });

        return next.handle(request);
    }
}
