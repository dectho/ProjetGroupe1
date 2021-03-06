import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { LineUpComponent } from './line-up/line-up.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { TicketsComponent } from './tickets/tickets.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ArtistListComponent } from './line-up/artist-list/artist-list.component';
import { ArtistFormComponent } from './line-up/artist-form/artist-form.component';
import {MapComponent} from "./info/map/map.component";
import {HomeLoginComponent} from "./login/homeLogin";
import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {JwtInterceptor} from "./_helpers";


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    InfoComponent,
    HomeComponent,
    LineUpComponent,
    MerchandiseComponent,
    TicketsComponent,
    LoginComponent,
    SignUpComponent,
    ArtistListComponent,
    ArtistFormComponent,
    MapComponent,
    HomeLoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [JwtInterceptor,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
