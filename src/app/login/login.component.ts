import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginForm: FormGroup;
  loading = false;
  submitted = false;
  //returnUrl: string;
  error = '';
  email: string = "";
  password: string = "";
  connected: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

    }

  signup() {
    this.router.navigate(['signup']);
  }

  isConnected() {
    if(this.email == "test" && this.password == "test"){
      this.connected = true;
    }
  }
}
