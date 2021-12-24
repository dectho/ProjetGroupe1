import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {AuthManagementService} from "../auth-management.service";
import {User} from "../user";
import {throwError} from "rxjs";
import {Request} from "../request";
import jwt_decode from 'jwt-decode';
import {Guid} from "guid-typescript";
import {EventBusService} from "../event-bus/event-bus.service";
import {EventType} from "../event-bus/event-type";
import {UserLogin} from "../user-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    pseudo: ['', Validators.required],
    password: ['', Validators.required]
  });
  returnUrl: string = '';
  errorBool: boolean = false;


  value : any;
  token : string;
  tokenDecoded : any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService : AuthManagementService,
    private eventBus:EventBusService
  ) {
  }

  ngOnInit() {

    //let tok1 : any = JSON.parse(<string>localStorage.getItem("token"));
    //console.log(tok1);

    /*
        // reset login status
        this.authenticationService.logout();
    */
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    let user = <UserLogin>{
      pseudo : this.f['pseudo'].value,
      password : this.f['password'].value
    };

    // Login a user if he exists

    this.authentificationService.login(user).subscribe(data =>
      {

        this.errorBool = false;
        this.value = data;
        this.token = this.value.token;
        this.tokenDecoded = this.getDecodedAccessToken(this.token);

        localStorage.setItem("token", this.token);

        localStorage.setItem("tokenDecoded", JSON.stringify(this.tokenDecoded) );

        this.eventBus.next({
          type: EventType.CONNECTED,
          data:this.tokenDecoded
        });

        this.router.navigate(['lineUp']);
      },
      error => {
        this.errorBool = true;
      });
  }

  getDecodedAccessToken(token: string): any {
    try{

      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }


  }

// Navigate to the page signup

  signup() {
    this.router.navigate(['signup']);
  }

  autoComplete() {
    this.loginForm.setValue(
      {
        pseudo : "test",
        password : "Test1$"
      }
    );
  }
}
