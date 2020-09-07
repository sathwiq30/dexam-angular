import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorsComponent } from './tutors/tutors.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { UsersComponent } from './users/users.component';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomersComponent } from './customers/customers.component';
import { AddComponent } from './add/add.component'; 
import { HelpdetailsComponent } from './helpcenter/helpdetails/helpdetails.component';
import { MomentModule } from 'ngx-moment';
import { AdduserComponent } from './adduser/adduser.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';


@NgModule({
  declarations: [AdminComponent, LoginComponent, DashboardComponent, TutorsComponent,
     HelpcenterComponent, UsersComponent, UsersdetailsComponent, SettingsComponent, CustomersComponent, AddComponent,
      HelpdetailsComponent,
      AdduserComponent,
      StudentdetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,MomentModule,
    AngularMaterialModule
  ]
})
export class AdminModule { }
