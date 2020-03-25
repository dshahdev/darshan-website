import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const menuIcon = document.querySelector('.hamburger-menu');
      const navbar = document.querySelector(".navbar");
      console.log(menuIcon + " "+ navbar);
      
      menuIcon.addEventListener("click", () => {
          console.log("it is clicked....");
          navbar.classList.toggle("change");
      })
  }

  // menuClickHandler() {
  //     console.log("it is clicked....");
  //     const menuIcon = document.querySelector('.hamburger-menu');
  //     const navbar = document.querySelector(".navbar");
  //     console.log(menuIcon + " "+ navbar);

  //     menuIcon.addEventListener("click", () => {
  //         console.log("it is clicked....");
  //         navbar.classList.toggle("change");
  //     })
  // }
  
}
