import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { MatStepper } from '@angular/material/stepper';
import { Validators, FormGroup, FormBuilder, NgForm, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {
  isLoading = false;
  r;bounce
  changePasswordForm: FormGroup;

  constructor(  private router: ActivatedRoute,private route: Router, private http : HttpClient,private toastr: ToastrService,
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
    
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
  } 

  onSendOtp(n , stepper : MatStepper){
    this.msg = ''
    console.log(n)
    this.http.post('https://namasteguru.herokuapp.com/api/auth/faculty/sendOTP',{
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
      this.toastr.error(this.msg)
    console.log(e)})
  }
  otp = false
  verified= false
  ph =  false
  msg = ''


  onCOtp(n,o , stepper : MatStepper){
    this.msg = ''
    console.log('started')
    this.http.post('https://namasteguru.herokuapp.com/api/auth/faculty/verifyOTP',{
      encodedOtp :this.encoded,
      contact : n,
      cOtp : o

    })
    .toPromise()
    .then(a=>{ this.otp = false ; this.verified = true; console.log(a)
      this.onSignupE()
      stepper.next()
    })
    .catch(e=> {this.msg = e.error.Details
      this.toastr.error(this.msg)})
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


  onSignupE( ){ 

    this.msg= ''
    // return 
     
    if (this.firstFormGroup.invalid  ) {
      return;
    }
    this.isLoading = true;  
    console.log('submited')
    const formData = new FormData()
    formData.append('name',  this.firstFormGroup.value.name )
    formData.append('email', this.firstFormGroup.value.email)
    formData.append('contact', this.firstFormGroup.value.phone)
    formData.append('gender', this.firstFormGroup.value.gender)
    formData.append('password',this.firstFormGroup.value.password)
    // formData.append('highest_degree',this.thirdFormGroup.value.degree)
    // formData.append('short_profile_description',this.thirdFormGroup.value.description)

    console.log(formData)
    
    this.http.post('https://namasteguru.herokuapp.com/api/auth/faculty/register',
    formData
     )
    .subscribe((succ : any)=>{
      
      // this.route.navigateByUrl('verify')
      this.msg = succ.message
      this.toastr.success(this.msg)
      console.log('success')
      console.log(succ)
      this.isLoading = false

    }, error=>{   
      console.log(error)
      this.msg = error.error.data[0].msg
      this.toastr.error(this.msg)
      this.isLoading = false;  
    })

 
  }


  async onSignup(form: NgForm) {
    console.log(this.same)
    if(this.same){
      console.log('not same')
      return 
    }

    if (form.invalid) {
      console.log('invalid')
      return;
    }
    console.log(form.value)
  
    this.isLoading = true; 
    this.http.post('https://namasteguru.herokuapp.com/api/auth/student/register',
    {
      "name": form.value.user,     
      "email" : form.value.email,     
      "contact": form.value.number,     
      "password": form.value.password,      
      "class":form.value.grade,     
      "board": form.value.board,     
      "medium": form.value.medium,    
      "preffered_teaching_style": form.value.style 
    })
    .subscribe(succ=>{
      this.isLoading = false
      this.route.navigateByUrl('verify')
      console.log('success')
      console.log(succ)

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
