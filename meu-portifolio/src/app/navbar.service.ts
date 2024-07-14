  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })

  export class NavbarService {
    private navbarOpen = false;
    
    constructor() {}

    toggleNavbar() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse) {
        navbarCollapse.classList.toggle('show');
      }
    }

    closeNavbar() {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  }