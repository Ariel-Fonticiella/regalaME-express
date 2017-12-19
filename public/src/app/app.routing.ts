import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GiftedListComponent } from './components/gifted-list/gifted-list.component';
import { GiftedDetailsComponent } from './components/gifted-details/gifted-details.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { FormsComponent } from './forms/forms.component';
import { AddEventComponent } from './add-event/add-event.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'gifted-list',     component: GiftedListComponent },
    { path: 'gifted/:id', component: GiftedDetailsComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'login',           component: LoginComponent },
    { path: 'forms',           component: FormsComponent },
    { path: 'add-event',           component: AddEventComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
