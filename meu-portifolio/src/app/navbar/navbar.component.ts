import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service'; // Certifique-se de que o caminho está correto
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, HomeComponent, ProjectsComponent, CarouselComponent, AboutComponent],
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

    scrollTo(sectionId: string): void {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
}