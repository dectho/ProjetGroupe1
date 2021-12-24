import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../user";
import jwt_decode from "jwt-decode";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthManagementService} from "../../auth-management.service";
import {EventType} from "../../event-bus/event-type";
import {EventBusService} from "../../event-bus/event-bus.service";
import {UserLogin} from "../../user-login";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  value:any = {};

  loginForm: FormGroup = this.formBuilder.group({
    pseudo: ['', Validators.required],
    password: ['', Validators.required]
  });

  errorBool: boolean = false;
  errorsString : string[] = [];


  //value : any;
  token : string;
  tokenDecoded : any;

  constructor(private router: Router, private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private authentificationService : AuthManagementService,
              private eventBus:EventBusService
              ) { }

  ngOnInit(): void {

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




    this.authentificationService.register(user).subscribe(data =>
      {
        this.errorBool = false;
        this.value = data;
        this.token = this.value.token;
        this.tokenDecoded = this.getDecodedAccessToken(this.token);

        localStorage.setItem("token", this.token);

        localStorage.setItem("tokenDecoded", this.tokenDecoded);

        this.eventBus.next({
          type: EventType.CONNECTED,
          data:this.tokenDecoded
        });

        this.router.navigate(['lineUp']);
      },
      error => {
        this.errorsString = error.error.errors;
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

  loginRoute() {
    this.router.navigate(['login']);
  }
}
