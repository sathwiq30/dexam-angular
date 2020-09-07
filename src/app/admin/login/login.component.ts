import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  co; 
  hide = true;
  error
  bounce
  constructor( private http: HttpClient,private dbService: NgxIndexedDBService,
    private route: ActivatedRoute ,
    private router: Router  
) {}
ngOnInit() { 
}
  onSigninE(form  : NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/auth/admin/login',
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
            name: succ.data.firstName,
            role: succ.data.role,
            token: succ.data.token,
            uid: succ.data._id ,
            job : succ.data.job
          })
          .then(a=> 
            {
            console.log('added successfully')
            this.router.navigateByUrl('/admin/dashboard') 
            
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

}
