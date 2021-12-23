import {Injectable, OnInit} from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services";
import {environment} from "../../environments/environment";
import {AuthManagementService} from "../auth-management.service";
import {EventType} from "../event-bus/event-type";
import {EventBusService} from "../event-bus/event-bus.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService : AuthManagementService) { }

  token : any;

  intercept(request: HttpRequest<unknown>,next: HttpHandler): Observable<HttpEvent<unknown>> {
        let tok : any = localStorage.getItem("token");

        request = request.clone({
        headers: request.headers.set('authorization', "Bearer " + tok),
      });

        return next.handle(request);
    }
}
