import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
  error
  constructor(private http: HttpClient,private dbService: NgxIndexedDBService,private toastr: ToastrService,
    private route: ActivatedRoute ,private router: Router ) { }
  isLoading =  false
  ngOnInit() {
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
            this.toastr.success('logged in successfully')
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
      this.toastr.error(this.error)
    }
    )
    
    // this.authService.login(form.value.email, form.value.password);
  }
}
