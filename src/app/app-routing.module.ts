import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./info/info.component";
import {HomeComponent} from "./home/home.component";
import {MerchandiseComponent} from "./merchandise/merchandise.component";
import {LineUpComponent} from "./line-up/line-up.component";
import {TicketsComponent} from "./tickets/tickets.component";
import {LoginComponent} from "./login/login.component";

//IMPORT APPROUTINGMODULE DANS APPMODULE
const routes:Routes = [
  {
    path: '', pathMatch: 'full', redirectTo:'home'
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path:'info', component: InfoComponent
  },
  {
    path:'merchandise', component: MerchandiseComponent
  },
  {
    path:'lineUp', component: LineUpComponent
  },
  {
    path:'tickets', component: TicketsComponent
  },
  {
    path:'login', component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
