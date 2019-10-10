import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { QuoteComponent } from './quote/quote.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { SignupLayoutComponent } from './layouts/signup-layout/signup-layout.component';

import { SigninComponent } from './signin/signin.component';
// import { ContentinLayoutComponent } from './layouts/contentin-layout/contentin-layout.component';
import { SigninLayoutComponent } from './layouts/signin-layout/signin-layout.component';
import { IndexbodyComponent } from './indexbody/indexbody.component';

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

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent ,
    children: [
    {
      path:'index',
      component:IndexbodyComponent
    }
  ]  
  },

{
  path:'',
  component: SignupLayoutComponent,
  children: [
    {
      path: 'signup',
      component:QuoteComponent
    }
  ]
},
{
  path:'',
  component: SigninLayoutComponent,
  children: [
    {
      path: 'signin' ,
      component:SigninComponent
    }
  ]
},

{
  path:'',
  component: AngularHomeLayoutComponent,
  children: [
    {
      path: 'angularhome' ,
      component:AngularhomeComponent
    }
  ]
},

{
  path:'',
  component: JavahomeLayoutComponent,
  children: [
    {
      path: 'javahome' ,
      component:JavahomeComponent
    }
  ]
},

{
  path:'',
  component: SpringhomeLayoutComponent,
  children: [
    {
      path: 'springhome' ,
      component:SpringhomeComponent
    }
  ]
},

{
  path:'',
  component: HibernatehomeLayoutComponent,
  children: [
    {
      path: 'hibernate' ,
      component:HibernatehomeComponent
    }
  ]
},

{
  path:'',
  component: PaydetailsLayoutComponent,
  children: [
    {
      path: 'paydetails' ,
      component:PaydetailsComponent
    }
  ]
},

{
  path:'',
  component: PayconfirmLayoutComponent,
  children: [
    {
      path: 'payconfirm' ,
      component:PayconfirmComponent
    }
  ]
},

{
  path:'',
  component: StudentindexLayoutComponent,
  children: [
    {
      path: 'studentindex' ,
      component:StudentindexComponent
    }
  ]
},

{
  path:'',
  component: StudentcurrentLayoutComponent,
  children: [
    {
      path: 'studentcurrent' ,
      component:StudentcurrentComponent
    }
  ]
},

{
  path:'',
  component: StudentcompleteLayoutComponent,
  children: [
    {
      path: 'studentcomplete' ,
      component:StudentcompleteComponent
    }
  ]
},

{
  path:'',
  component: MentorsigninLayoutComponent,
  children: [
    {
      path: 'mentorsignin' ,
      component:MentorsigninComponent
    }
  ]
},

{
  path:'',
  component: MentorprofileLayoutComponent,
  children: [
    {
      path: 'mentorprofile' ,
      component:MentorprofileComponent
    }
  ]
},

{
  path:'',
  component: MentoreditLayoutComponent,
  children: [
    {
      path: 'mentoredit' ,
      component:MentoreditComponent
    }
  ]
},

{
  path:'',
  component: MentorstatusLayoutComponent,
  children: [
    {
      path: 'mentorstatus' ,
      component:MentorstatusComponent
    }
  ]
},

{
  path:'',
  component: AdminsigninLayoutComponent,
  children: [
    {
      path: 'adminsignin' ,
      component:AdminsigninComponent
    }
  ]
},

{
  path:'',
  component: AdmintechnologyLayoutComponent,
  children: [
    {
      path: 'admintechnology' ,
      component:AdmintechnologyComponent
    }
  ]
},

{
  path:'',
  component: ManageaccountLayoutComponent,
  children: [
    {
      path: 'manageaccount' ,
      component:ManageaccountComponent
    }
  ]
},

{
  path: '**', redirectTo:''
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
