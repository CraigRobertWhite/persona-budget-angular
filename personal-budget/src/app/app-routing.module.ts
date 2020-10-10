import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: {routeName: 'Home'}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {routeName: 'About'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {routeName: 'Login'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {routeName: 'Contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
