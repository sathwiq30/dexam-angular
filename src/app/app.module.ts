import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
 

import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CarouselModule } from 'ngx-owl-carousel-o';  
import { CarousalComponent } from './shared/carousal/carousal.component';
import { StudentComponent } from './student/student.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycoursesComponent } from './student/mycourses/mycourses.component';
import { MycalederComponent } from './student/mycaleder/mycaleder.component';
import { LandingComponent } from './student/landing/landing.component';
import { CourseComponent } from './student/course/course.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { VerifyComponent } from './auth/verify/verify.component';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { FacultyComponent } from './faculty/faculty.component';
import { AddcourseComponent } from './faculty/addcourse/addcourse.component'; 
import { NavComponent } from './faculty/nav/nav.component';
import { McoursesComponent } from './faculty/mcourses/mcourses.component';
import { LandingpageComponent } from './shared/landingpage/landingpage.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { ProfileComponent } from './student/profile/profile.component';
import { SuccessComponent } from './student/payments/success/success.component';
import { FailureComponent } from './student/payments/failure/failure.component';
import { FprofileComponent } from './faculty/fprofile/fprofile.component';
import { ChangepasswordComponent } from './faculty/changepassword/changepassword.component';
import { LandingfComponent } from './faculty/landingf/landingf.component';
import { DefaultLandingComponent } from './default-landing/default-landing.component';
import { HelloComponent } from './shared/hello/hello.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { ForroutesComponent } from './default-landing/forroutes/forroutes.component';
import { StartComponent } from './default-landing/start/start.component';
import { CoursesComponent } from './default-landing/courses/courses.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './faculty/settings/settings.component';
import { SgnupEducatorComponent } from './auth/sgnup-educator/sgnup-educator.component';
import { SharedModule } from './shared/shared.module';
import { UploadKycComponent } from './faculty/upload-kyc/upload-kyc.component';
import { FulldetailsComponent } from './help/fulldetails/fulldetails.component';
import { ScollToBottomDirective } from './help/fulldetails/scoll-to-bottom.directive';
import { CartComponent } from './student/cart/cart.component'; 


import { ToastrModule } from 'ngx-toastr';



const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [ {
    store: 'kyc',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'kyc', keypath: 'name', options: { unique: false } }, 
    ]
  },
  {
    store: 'token',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'uid',   keypath: 'uid', options: { unique: false } }  ,
      { name: 'name',  keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }, 
      { name: 'token', keypath: 'token', options: { unique: false } }, 
      { name: 'role',  keypath: 'role', options: { unique: false } },
      { name: 'contact', keypath: 'contact', options: { unique: false } }, 
    ]
  }
]
};

export function tokenGetter() {
  return  'cvbnmsdrftyuiop'
}



@NgModule({
  declarations: [AppComponent ,
    NavbarComponent,
    SignupComponent,
    SigninComponent,
    CarousalComponent,
    StudentComponent,
    AuthComponent,
    MycoursesComponent,
    MycalederComponent,
    LandingComponent,
    CourseComponent,
    FooterComponent,
    VerifyComponent,
    FacultyComponent,
    AddcourseComponent, 
    NavComponent, McoursesComponent, LandingpageComponent, ForgotComponent, ProfileComponent, SuccessComponent,
     FailureComponent, FprofileComponent, ChangepasswordComponent, LandingfComponent, DefaultLandingComponent, 
     HelloComponent, ForroutesComponent, StartComponent, CoursesComponent, LoadingComponent, HelpComponent, 
     SettingsComponent, SgnupEducatorComponent, UploadKycComponent, FulldetailsComponent, ScollToBottomDirective, CartComponent,  

  
  ],
  imports: [ToastrModule.forRoot(),
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MomentModule,
    AppRoutingModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    }), 
    BrowserModule,NguCarouselModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CarouselModule ,
    FormsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    ReactiveFormsModule,NgbModule,
    SharedModule,

  ],
  entryComponents: [
    SigninComponent,
    AuthComponent,
    ForroutesComponent,
    ForgotComponent,
    SgnupEducatorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
