import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorsComponent } from './tutors/tutors.component';
import { CustomersComponent } from './customers/customers.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component'; 
import { AuthGuard } from './auth.guard';
import { UsersdetailsComponent } from './usersdetails/usersdetails.component';
import { AddComponent } from './add/add.component';
import { HelpdetailsComponent } from './helpcenter/helpdetails/helpdetails.component';
import { AdduserComponent } from './adduser/adduser.component';
import { JobsGuard } from './jobs.guard';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path : '' , component : AdminComponent  , 
    children : [ 
      { path : 'dashboard' , component : DashboardComponent  ,
      data : { expectedRole : ['SuperUser', "Finance"]} , canActivate : [JobsGuard ]} ,
      { path : 'tutors' , component : TutorsComponent  ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard]},
      { path : 'students' ,component : CustomersComponent  ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard]},
      { path : 'settings' , component : SettingsComponent  ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard]},
      { path : 'helpcenter' , component : HelpcenterComponent ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard] } ,
      { path : 'add' , component : AddComponent ,
      data : { expectedRole : ['SuperUser' ,'Admin']} , canActivate : [JobsGuard]  },
      { path : 'addusers' , component : AdduserComponent  ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard]},
      { path : 'student/userdetails/:id' , component : StudentdetailsComponent  ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard]},
      { path : 'facutlty/userdetails/:id' , component : UsersdetailsComponent  ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard]},
      { path : 'help/:id' , component : HelpdetailsComponent  ,
      data : { expectedRole : ['SuperUser']} , canActivate : [JobsGuard]},
    ] , canActivate : [AuthGuard] , data : { expectedRole : 'Admin'}  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
