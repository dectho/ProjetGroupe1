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
    ArtistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
