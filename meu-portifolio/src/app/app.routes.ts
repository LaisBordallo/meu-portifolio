import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'navbar', component: NavbarComponent}
];

// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ProjectsComponent } from './projects/projects.component';

// const routes: Routes = [
//     {path: '', redirectTo: '/home', pathMatch: 'full'},
//     {path: 'home', component: HomeComponent},
//     {path: 'about', component: AboutComponent},
//     {path: 'projects', component: ProjectsComponent}
// ];

// export const AppRoutes: Routes = [];