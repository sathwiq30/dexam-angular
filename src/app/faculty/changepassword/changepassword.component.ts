import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private http : HttpClient,private auth : AuthGuard, private router : Router) {}
  isLoading = false
  secondFormGroup : FormGroup;
  url 
  ngOnInit() {
    this.url = this.router.url.slice(1,8)
    this.secondFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      oPassword: ['', Validators.required],
    },{validator: this.passwordConfirming} );
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }

  }
  msg = ''
  onSubmit(){
    if(this.secondFormGroup.invalid){
      return
    }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    console.log(this.secondFormGroup.value.password)
    this.msg = '' 
    console.log(this.secondFormGroup.value.password)

  
    this.isLoading =true
      this.http.put('https://namasteguru.herokuapp.com/api/'+this.url+'/changepassword',{
 
          "newpassword": ""+ this.secondFormGroup.value.password , 
          "password":""+this.secondFormGroup.value.oPassword
 
      },httpOptions)
      .toPromise()
      .then(a=>{
        this.isLoading =false
        console.log(a) 
        this.secondFormGroup.reset()
      })
      .catch(err=>{
        this.isLoading = false
        this.msg = err.error.message
        console.log(err)
      })

  }

}
