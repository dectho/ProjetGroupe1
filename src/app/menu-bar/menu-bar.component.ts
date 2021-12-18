import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  //currentUser: User;

  constructor(
    private router: Router,
    //private authenticationService: AuthenticationService
  ) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  /**logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }*/

  ngOnInit(): void {}


  ngOnDestroy(){
    document.body.className="";
  }

}
