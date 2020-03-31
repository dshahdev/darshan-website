import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    const menuIcon = document.querySelector('.hamburger-menu');
      const navbar = document.querySelector(".navbar");
      console.log(menuIcon + " "+ navbar);
      
      menuIcon.addEventListener("click", () => {
          console.log("it is clicked....");
          navbar.classList.toggle("change");
      })
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
