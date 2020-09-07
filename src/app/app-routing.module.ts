import {LandingLayoutComponent} from "./shared/components/layouts/landing-layout/landing-layout.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AuthLayoutComponent} from "./shared/components/layouts/auth-layout/auth-layout.component";
 
import { StudentComponent } from './student/student.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LandingComponent } from './student/landing/landing.component';
import { MycoursesComponent } from './student/mycourses/mycourses.component';
import { MycalederComponent } from './student/mycaleder/mycaleder.component';
import { CourseComponent } from './student/course/course.component';
import { VerifyComponent } from './auth/verify/verify.component'; 
import { AuthGuard } from './auth/auth.guard';
import { RedirectGuard } from './auth/redirect.guard';
import { FacultyComponent } from './faculty/faculty.component';
import { AddcourseComponent } from './faculty/addcourse/addcourse.component';
import { McoursesComponent } from './faculty/mcourses/mcourses.component';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './shared/landingpage/landingpage.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ProfileComponent } from './student/profile/profile.component';
import { SuccessComponent } from './student/payments/success/success.component';
import { FailureComponent } from './student/payments/failure/failure.component';
import { FprofileComponent } from './faculty/fprofile/fprofile.component';
import { ChangepasswordComponent } from './faculty/changepassword/changepassword.component';
import { LandingfComponent } from './faculty/landingf/landingf.component';
import { DefaultLandingComponent } from './default-landing/default-landing.component';
import { StartComponent } from './default-landing/start/start.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './faculty/settings/settings.component'; 
import { FulldetailsComponent } from "./help/fulldetails/fulldetails.component";
import { CartComponent } from "./student/cart/cart.component";


const routes: Routes = [

  
  {
    path: "l",
    // comment out this 2 line to make any landing demo as your root .
    redirectTo: "landing",

    pathMatch: "full",

    /** 
      uncomment this to make root url as one of landing page .
      and open landing-routing.module.ts to select which demo version 
      you want as your root

      like : 
      in landing-routing.module.ts
   
    
   

    /**  component: LandingLayoutComponent,
     children: [
       {
         path: '',
         loadChildren: './views/landing/landing.module#LandingModule'
      }
     ]
     **/
  },
  {
    path: "auth",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            (m) => m.SessionsModule
          ),
      },
    ],
  },
 


  {
    path: "",
    component: LandingLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./views/landing/landing.module").then((m) => m.LandingModule),
      },
    ],
  },
  // {
  //   path : '', component : DefaultLandingComponent , 
  //     children : [
  //       { path : '' , component : StartComponent},
  //       { path : 'login' , component : SigninComponent },
  //       { path : 'signup' , component : SignupComponent}, 
  //     ], 
  // },
  { path : 'student', component : StudentComponent , 
    children : [
      { path : 'dashboard', component: LandingComponent},
      { path : 'mycourses' , component : MycoursesComponent},
      { path : 'mycalender' , component : MycalederComponent},
      { path : 'enrollcourse' , component : CourseComponent},
      { path : 'profile' , component : ProfileComponent},
      { path : 'help' , component : HelpComponent  },
      { path : 'help/:id' , component : FulldetailsComponent },
      { path : 'settings' , component : SettingsComponent},
      { path : 'changepassword' , component : ChangepasswordComponent},
      { path : 'cart' , component : CartComponent},
      { path : 'payment/sucess/:id' , component : SuccessComponent},
      { path : 'payment/failure/:id' , component : FailureComponent},
    ]    ,
    data: { 
      expectedRole: 'Student'
    }, canActivate : [AuthGuard]
  },
  { path : 'faculty', component : FacultyComponent , canActivate : [AuthGuard], data : { expectedRole : 'Faculty'},
    children : [
      { path : 'dashboard', component: LandingfComponent},
      { path : 'add', component : AddcourseComponent},
      { path : 'mycourses' , component: McoursesComponent},
      { path : 'profile', component : FprofileComponent},
      { path : 'changepassword' , component : ChangepasswordComponent},
      { path : 'myenrollment' , component : AddcourseComponent},
      { path : 'mycalender' , component : MycalederComponent},
      { path : 'help' , component : HelpComponent  },
      { path : 'help/:id' , component : FulldetailsComponent },
      { path : 'settings' , component : SettingsComponent}
    ]
  },
  { path : 'Faculty', redirectTo : 'faculty'},
  { path : 'Student', redirectTo : 'student'},
  { path : 'faculty', redirectTo : 'faculty/dashboard'},
  { path : 'faculty/enroll/sucess' , component : SuccessComponent},
  { path : 'faculty/enroll/failure' , component : FailureComponent},


  
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path : '**' , redirectTo : ''},


];

@NgModule({
  imports: [RouterModule.forRoot(routes  )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
