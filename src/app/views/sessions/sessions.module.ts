import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LandingModule } from '../landing/landing.module'; 
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material.module';
import { LoginstudentComponent } from './loginstudent/loginstudent.component';
import { SignupstudentsComponent } from './signupstudents/signupstudents.component';

@NgModule({
  imports: [
    CommonModule,
    SessionsRoutingModule  ,
    LandingModule ,
    FormsModule ,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  declarations: [SignupComponent, SigninComponent, ForgotComponent, LoginstudentComponent, SignupstudentsComponent  ]
})
export class SessionsModule { }
