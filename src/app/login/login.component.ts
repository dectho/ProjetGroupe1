import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services";
import {first} from "rxjs/operators";

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
  loading = false;
  submitted = false;
  returnUrl: string='';
  error = 'error';

  connected: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

/*
    // reset login status
    this.authenticationService.logout();
*/
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.submitted = true;
    if(this.loginForm.value.pseudo == 'test' && this.loginForm.value.password == 'test'){
      this.connected = true;
      console.log(this.connected);





    this.authenticationService.login(this.f['pseudo'].value, this.f['password'].value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['admin']);
        },
        error => {
          this.error = error;
          this.loading = false;
        });

    }
  }





  signup() {
    this.router.navigate(['signup']);
  }
/*
  isConnected() {
    if(this.email == "test" && this.password == "test"){
      this.connected = true;
    }
  }*/
}
