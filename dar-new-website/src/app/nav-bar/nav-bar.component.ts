import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navbar;
  sticky;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
   
    this.navbar = document.getElementById("navbar");
    this.sticky = this.navbar.offsetTop;

    window.onscroll = () => {
      this.myFunction()
    };


    const menuIcon = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector(".navbar");
    
      
      menuIcon.addEventListener("click", () => {
          console.log("it is clicked....");
          navbar.classList.toggle("change");
      })
  }

  myFunction() {
    if (window.pageYOffset >= this.sticky) {
      this.navbar.classList.add("sticky")
    } else {
      this.navbar.classList.remove("sticky");
    }
  }
   get isLoggedIn(): boolean {
     return this.authService.isLoggedIn;
   }
   get userName(): string {
    return this.authService.currentUser.userName;
   }

   logOut(): void {
     this.authService.logout();
     this.router.navigateByUrl('/welcome');
   }
  
}
