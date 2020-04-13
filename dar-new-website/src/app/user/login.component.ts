import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
// import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class LoginComponent { 
    errorMessage: string;

    constructor(private authService: AuthService,
                private router: Router) {}

    login(loginForm: NgForm){
      
      console.log("login is clicked...")
      if(loginForm && loginForm.valid) {
        const username = loginForm.form.value.userName;
        const password = loginForm.form.value.password;
        console.log("username: "+ username + " "+ "password: "+password);
        //create a authservice
        this.authService.login(username, password);
        // onclick change the navigation 

        this.router.navigate(['/products']);
      } else {
        this.errorMessage = "please enter a username and password";
      }
    }
  }