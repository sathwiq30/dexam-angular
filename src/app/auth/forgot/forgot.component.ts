import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  ThirdFormGroup : FormGroup;
  isLoading=false
  constructor(private _formBuilder: FormBuilder , private http : HttpClient ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required]
    });
    this.ThirdFormGroup = this._formBuilder.group({
      otp: ['', [Validators.required, Validators.minLength(6)]], 
    } );
    this.secondFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },{validator: this.passwordConfirming} );
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
  } 
msg = ''
sendOtp(stepper :   MatStepper ){
  if(this.firstFormGroup.invalid){
    return
  }
  console.log(this.firstFormGroup.value.email )
  this.isLoading =true
    this.http.post('https://namasteguru.herokuapp.com/api/auth/faculty/forgotpassword',{
      email : ""+this.firstFormGroup.value.email 
    })
    .toPromise()
    .then(a=>{
      this.isLoading =false
      console.log(a)
      stepper.next()
    })
    .catch((err: any)=>{
      this.isLoading = false
      this.msg = err.error.message
      console.log(err)
    })
  }
  onSubmit(){
    this.msg = ''
    if(this.secondFormGroup.invalid){
      return
    }
    console.log(this.secondFormGroup.value.password)

    if(this.ThirdFormGroup.invalid){
      return
    }
    console.log(this.firstFormGroup.value.email )
    this.isLoading =true
      this.http.post('https://namasteguru.herokuapp.com/api/auth/faculty/updatepassword',{
 
          "email": ""+this.firstFormGroup.value.email ,
          "otp":""+this.secondFormGroup.value.otp,
          "password":""+this.ThirdFormGroup.value.password
 
      })
      .toPromise()
      .then(a=>{
        this.isLoading =false
        console.log(a) 
      })
      .catch(err=>{
        this.isLoading = false
        this.msg = err.error.message
        console.log(err)
      })

  }
}
