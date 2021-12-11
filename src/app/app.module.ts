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
import { MapComponent } from './info/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    InfoComponent,
    HomeComponent,
    LineUpComponent,
    MerchandiseComponent,
    TicketsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
