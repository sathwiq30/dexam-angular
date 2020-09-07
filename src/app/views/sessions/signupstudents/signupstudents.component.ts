import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { MatStepper } from '@angular/material/stepper';
import { Validators, FormGroup, FormBuilder, NgForm, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signupstudents',
  templateUrl: './signupstudents.component.html',
  styleUrls: ['./signupstudents.component.scss'],
  animations: [SharedAnimations]
})
export class SignupstudentsComponent implements OnInit {
  isLoading = false;
  r;bounce
  changePasswordForm: FormGroup;

  constructor(  private router: ActivatedRoute,private route: Router, private http : HttpClient,
    private _formBuilder: FormBuilder) { 
    }
  hide = true;
  same = false
  encoded
  thirdFormGroup: FormGroup;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
    submited(stepper : MatStepper){ 
      this.onSendOtp(this.firstFormGroup.value.phone , stepper)
    }
    confirmOtp(stepper : MatStepper){
      this.onCOtp(this.firstFormGroup.value.phone , this.secondFormGroup.value.secondCtrl, stepper)
    }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name : ['', Validators.required],
      phone : [ '' , Validators.required],
      email : [ '', Validators.required],
      password : [ '', Validators.required],
      gender : ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },{validator: this.passwordConfirming} );
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); 
    this.thirdFormGroup = this._formBuilder.group({ 
      grade: ['', Validators.required],
      board: ['', Validators.required],
      medium: ['', Validators.required],
      style: ['', Validators.required],
    }); 
    
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
  } 

  onSendOtp(n , stepper : MatStepper){
    this.msg = ''
    console.log(n)
    this.http.post('https://namasteguru.herokuapp.com/api/auth/student/sendOTP',{
      contact : ""+n
    })
    .toPromise()
    .then((a: any )=>{ 
      this.otp = true
      this.ph = true
      this.encoded = a.OTP.Details
      stepper.next()
      // this.msg = 'verified phone number'
      console.log(a)})
    .catch(e=> {this.msg = e.error.message
    console.log(e)})
  }
  otp = false
  verified= false
  ph =  false
  msg = ''


  onCOtp(n,o , stepper : MatStepper){
    this.msg = ''
    console.log('started')
    this.http.post('https://namasteguru.herokuapp.com/api/auth/student/verifyOTP',{
      encodedOtp :this.encoded,
      contact : n,
      cOtp : o

    })
    .toPromise()
    .then(a=>{ this.otp = false ; this.verified = true; console.log(a)
 
      stepper.next()
    })
    .catch(e=> this.msg = e.error.Details)
  }


  confirmPassword(event, pass){

    if(event.target.value.length == pass.length){
      console.log('s')
      console.log(event.target.value)

      console.log(pass)
      if( event.target.value != pass)
        this.same = true
    }
  }


  

  async onSignup( ) {
    this.msg= ''
    // return 
     
    if (this.firstFormGroup.invalid  ) {
      return;
    }
    if (this.thirdFormGroup.invalid  ) {
      return;
    }
    console.log(this.firstFormGroup.value.phone)
    const formData = new FormData()
    formData.append('name',  this.firstFormGroup.value.name )
    formData.append('email', this.firstFormGroup.value.email)
    formData.append('contact', this.firstFormGroup.value.phone)
    formData.append('gender', this.firstFormGroup.value.gender)
    formData.append('password',this.firstFormGroup.value.password)
    formData.append('class',this.thirdFormGroup.value.grade)
    formData.append('board',this.thirdFormGroup.value.board)
    formData.append('medium',this.thirdFormGroup.value.medium)
    formData.append('preffered_teaching_style',this.thirdFormGroup.value.style)


    this.isLoading = true; 
    this.http.post('https://namasteguru.herokuapp.com/api/auth/student/register',
    {
      "name": this.firstFormGroup.value.name,     
      "email" : this.firstFormGroup.value.email,     
      "contact": this.firstFormGroup.value.phone,     
      "password": this.firstFormGroup.value.password,      
      "class":this.thirdFormGroup.value.grade,     
      "board": this.thirdFormGroup.value.board,     
      "medium": this.thirdFormGroup.value.medium,    
      "preffered_teaching_style": this.thirdFormGroup.value.style 
    })
    .subscribe((succ : any)=>{
      this.msg = succ.message
      console.log('success')
      console.log(succ)
      this.isLoading = false

    }, error=>{   
      this.r = error.error.data[0].msg
      this.isLoading = false;  
    })

    // this.authService.createUser(form.value.email, form.value.password)
    //   .then(error=>{
    //     if(error== true){
    //     }
    //     else {
    //       console.log(error)
    //       this.r = error
    //       this.isLoading = false;
    //     }
    //   })
  }

}