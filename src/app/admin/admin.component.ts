import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../user";
import {SetUpService} from "../set-up.service";
import {UserRole} from "../user-role";
import {TicketService} from "../ticket.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users : User[] = [];

  map = new Map<string, string>();
  mapTicket = new Map<string, string>();

  constructor(private router: Router,
              private setUpService : SetUpService,
              private ticketService : TicketService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Used to display the list of users

  private getAllUsers() {
    this.setUpService.getAllUsers().subscribe(users =>
    {
      this.users = users;
      for (const user of this.users)
      {
        this.setUpService.getUserRoles(user.userName).subscribe(value => {
          for(let role of value)
          {
            this.map.set(user.userName, role);
          }
        });

        this.ticketService.getByUserName(user.userName).subscribe(value => {
            this.mapTicket.set(user.userName, "Yes");
          },
          error =>
          {
            this.mapTicket.set(user.userName, "No");
          }
        );

      }
    });

  }

  loginRoute() {
    this.router.navigate(['admin']);
  }

  // Used to change the role of a user but not implemented TODO

  switchRole(userName : string) {
    this.setUpService.getUserRoles(userName).subscribe(value => {
      for(let role of value)
      {
        if(role == "Admin")
        {
          let roleDelete = <UserRole>{
            name : userName,
            roleName : "Admin"
          }
          this.setUpService.RemoveUserFromRole(roleDelete);

          let roleCreate = <UserRole>{
            name : userName,
            roleName : "AppUser"
          }
          this.setUpService.AddUserToRole(roleCreate);
        }
        else
        {
          let userRole = <UserRole>{
            name : userName,
            roleName : "AppUser"
          }
          this.setUpService.RemoveUserFromRole(userRole);

          let roleCreate = <UserRole>{
            name : userName,
            roleName : "Admin"
          }
          this.setUpService.AddUserToRole(roleCreate);
        }
      }
      this.getAllUsers();
    })
  }
}
