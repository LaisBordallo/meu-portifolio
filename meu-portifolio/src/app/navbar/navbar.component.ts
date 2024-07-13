// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {

// }

import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../navbar/navbar.service'; // Assuming the path is correct
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Adicione esta importação

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione RouterModule aqui
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private navbarService: NavbarService, private router: Router) {}

  navegarPara(path: string, event: Event) {
    event.preventDefault();
    this.router.navigate([path]);
    this.navbarService.closeNavbar();
  }

  toggleNavbar() {
    this.navbarService.toggleNavbar();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.navbarService.closeNavbar();
    } else if (target.closest('.nav-link')) {
      this.navbarService.closeNavbar();
    }
  }
}
