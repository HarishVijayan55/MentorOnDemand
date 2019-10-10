import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuoteComponent } from './quote/quote.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { SignupLayoutComponent } from './layouts/signup-layout/signup-layout.component';
import {ContentinLayoutComponent} from './layouts/contentin-layout/contentin-layout.component';
import { SigninLayoutComponent } from './layouts/signin-layout/signin-layout.component';
import { SigninComponent } from './signin/signin.component';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import{    MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
}from '@angular/material';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IndexbodyComponent } from './indexbody/indexbody.component';
import { AngularbodyComponent } from './angularbody/angularbody.component';
import { AngularhomeComponent } from './angularhome/angularhome.component';
import { AngularHomeLayoutComponent } from './layouts/angular-home-layout/angular-home-layout.component';
import { JavahomeComponent } from './javahome/javahome.component';
import { JavahomeLayoutComponent } from './layouts/javahome-layout/javahome-layout.component';
import { SpringhomeComponent } from './springhome/springhome.component';
import { SpringhomeLayoutComponent } from './layouts/springhome-layout/springhome-layout.component';
import { HibernatehomeComponent } from './hibernatehome/hibernatehome.component';
import { HibernatehomeLayoutComponent } from './layouts/hibernatehome-layout/hibernatehome-layout.component';
import { PaydetailsComponent } from './paydetails/paydetails.component';
import { PaydetailsLayoutComponent } from './layouts/paydetails-layout/paydetails-layout.component';
import { PayconfirmComponent } from './payconfirm/payconfirm.component';
import { PayconfirmLayoutComponent } from './layouts/payconfirm-layout/payconfirm-layout.component';
import { StudentindexComponent } from './studentindex/studentindex.component';
import { StudentindexLayoutComponent } from './layouts/studentindex-layout/studentindex-layout.component';
import { StudentcurrentComponent } from './studentcurrent/studentcurrent.component';
import { StudentcurrentLayoutComponent } from './layouts/studentcurrent-layout/studentcurrent-layout.component';
import { StudentcompleteComponent } from './studentcomplete/studentcomplete.component';
import { StudentcompleteLayoutComponent } from './layouts/studentcomplete-layout/studentcomplete-layout.component';

import { HttpClientModule } from '@angular/common/http';
import { MentorsigninComponent } from './mentorsignin/mentorsignin.component';
import { MentorsigninLayoutComponent } from './layouts/mentorsignin-layout/mentorsignin-layout.component';
import { MentorprofileComponent } from './mentorprofile/mentorprofile.component';
import { MentorprofileLayoutComponent } from './layouts/mentorprofile-layout/mentorprofile-layout.component';
import { MentoreditComponent } from './mentoredit/mentoredit.component';
import { MentoreditLayoutComponent } from './layouts/mentoredit-layout/mentoredit-layout.component';
import { MentorstatusComponent } from './mentorstatus/mentorstatus.component';
import { MentorstatusLayoutComponent } from './layouts/mentorstatus-layout/mentorstatus-layout.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsigninLayoutComponent } from './layouts/adminsignin-layout/adminsignin-layout.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdmintechnologyLayoutComponent } from './layouts/admintechnology-layout/admintechnology-layout.component';
import { ManageaccountComponent } from './manageaccount/manageaccount.component';
import { ManageaccountLayoutComponent } from './layouts/manageaccount-layout/manageaccount-layout.component';

import { FormsModule } from '@angular/forms';
import { Quote } from '@angular/compiler';


@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    QuoteComponent,
    ContentLayoutComponent,
    SignupLayoutComponent,
    ContentinLayoutComponent,
    SigninLayoutComponent,
    SigninComponent,
    IndexbodyComponent,
    AngularbodyComponent,
    AngularhomeComponent,
   
    AngularHomeLayoutComponent,
   
    JavahomeComponent,
   
    JavahomeLayoutComponent,
   
    SpringhomeComponent,
   
    SpringhomeLayoutComponent,
   
    HibernatehomeComponent,
   
    HibernatehomeLayoutComponent,
   
    PaydetailsComponent,
   
    PaydetailsLayoutComponent,
   
    PayconfirmComponent,
    QuoteComponent,

    PayconfirmLayoutComponent,
   
    StudentindexComponent,
   
    StudentindexLayoutComponent,
   
    StudentcurrentComponent,
   
    StudentcurrentLayoutComponent,
   
    StudentcompleteComponent,
   
    StudentcompleteLayoutComponent,
   
    MentorsigninComponent,
   
    MentorsigninLayoutComponent,
   
    MentorprofileComponent,
   
    MentorprofileLayoutComponent,
   
    MentoreditComponent,
   
    MentoreditLayoutComponent,
   
    MentorstatusComponent,
   
    MentorstatusLayoutComponent,
   
    AdminsigninComponent,
   
    AdminsigninLayoutComponent,
   
    AdmintechnologyComponent,
   
    AdmintechnologyLayoutComponent,
   
    ManageaccountComponent,
   
    ManageaccountLayoutComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
