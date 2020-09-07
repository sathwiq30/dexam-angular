import { Component, OnInit  } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
// my-component.component.ts
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInUp } from 'ngx-animate';
import { HttpClient } from '@angular/common/http';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ForgotComponent } from '../forgot/forgot.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(fadeInUp))])
  ],
})
export class SigninComponent  implements OnInit  {
  isLoading = false;
  co; 
  hide = true;
  error
  bounce
  constructor( private http: HttpClient,private dbService: NgxIndexedDBService,
              private route: ActivatedRoute,public dialogRef: MatDialogRef<SigninComponent>,
              private router: Router ,public dialog: MatDialog,  public dialogReff: MatDialogRef<ForgotComponent>
    ) {}
  ngOnInit() { 
  }
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/auth/student/login',
    {  "email": form.value.email,  
       "password": form.value.password 
    })
    .subscribe((succ: any )=>{
      console.log(succ) 
      
      this.dbService.clear('token').then(
        () =>{
          this.dbService.add( 'token' , {
            contact: succ.data.contact,
            email: succ.data.email,
            name: succ.data.name,
            role: succ.data.role,
            token: succ.data.token,
            uid: succ.data._id
          })
          .then(a=> {console.log('added successfully')
          this.router.navigateByUrl('/student') }, err=> console.log(err))
        },
         err=>{
          console.log(err)
         }
      )
    }, err=>{
      console.log(err.error.message)
      this.isLoading = false
      this.error = err.error.message
    }
    )
    
    // this.authService.login(form.value.email, form.value.password);
  }
  onSigninE(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/auth/faculty/login',
    {  "email": form.value.email,  
       "password": form.value.password 
    })
    .subscribe((succ: any )=>{
      console.log(succ) 
      this.onNoClick()
      this.dbService.clear('token').then(
        () =>{
          this.dbService.add( 'token' , {
            contact: succ.data.contact,
            email: succ.data.email,
            name: succ.data.name,
            role: succ.data.role,
            token: succ.data.token,
            uid: succ.data._id
          })
          .then(a=> 
            {
            console.log('added successfully')
            this.router.navigateByUrl('/faculty/dashboard') 
            
          }, err=> console.log(err))
        },
         err=>{
          console.log(err)
         }
      )
    }, err=>{
      console.log(err.error.message)
      this.isLoading = false
      this.error = err.error.message
    }
    )
    
    // this.authService.login(form.value.email, form.value.password);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  openDialog(): void {
    const dialogReff = this.dialog.open(ForgotComponent, {
      width: '1050px'   
    });
    this.onNoClick()
  
    dialogReff.afterClosed().subscribe(result => {
      console.log('The dialog was closed'); 
    });
  } 
}
 
