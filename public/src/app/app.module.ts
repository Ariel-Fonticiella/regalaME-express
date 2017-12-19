import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'angular-calendar';
import { HomeModule } from './home/home.module';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserApiService } from './services/user-api.service';
import { GiftedApiService } from './services/gifted-api.service';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GiftedListComponent } from './components/gifted-list/gifted-list.component';
import { GiftedDetailsComponent } from './components/gifted-details/gifted-details.component';
import { LoginComponent } from './login/login.component';
import { FormsComponent } from './forms/forms.component';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    GiftedDetailsComponent,
    GiftedListComponent,
    LoginComponent,
    FormsComponent,
    AddEventComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot()
  ],
  providers: [
    UserApiService,
    GiftedApiService
  ],
  bootstrap: [AppComponent],
  exports: [ProfileComponent]
})
export class AppModule { }
