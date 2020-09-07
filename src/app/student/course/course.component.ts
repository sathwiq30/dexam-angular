import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http : HttpClient,private auth : AuthGuard, private toastr : ToastrService) { }
  isLoading = true
  classes
  selected
  selectedS 
  weekend
  weekday
  ngOnInit() {

    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    this.http.get('https://namasteguru.herokuapp.com/api/getslots'  )
    .toPromise()
    .then((succ: any )=>{
      console.log(succ)   
      this.weekend  = succ.data.Weekend
      this.weekday  = succ.data.Weekday
      console.log(this.weekday)
    }
    )
    .catch(err=> console.log(err))



    this.http.get('https://namasteguru.herokuapp.com/api/getclasses' )
    .toPromise() 
    .then((succ: any )=>{
      console.log(succ)  
      this.isLoading = false
      this.classes = succ.data
    }
    )
    .catch(err=> console.log(err))
  }

  reset(){
    this.selected = false
    this.selectedS = false
    this.msg = null
  }
  click(form : NgForm){
    console.log(  form.value )
    console.log(  form.value.du )
    if(form.invalid){
      return 
    }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   }; 
   this.obj[ 'slot'] =  form.value[ form.value.du+'s']
   this.obj['duration'] =  form.value.duration
   this.obj['subject'] =  form.value.sub
   this.obj['class'] = this.classes[form.value.type].class    
  this.obj['type'] = form.value.du
  console.log(this.obj)
    this.http.post('https://namasteguru.herokuapp.com/api/student/enroll', this.obj,httpOptions)
    .toPromise()
    .then((a:any)=>{
      

      this.msg = a.message.message
      // this.toastr.success(this.msg)
      console.log(this.msg)
      this.price = a.message.price
    })
    .catch(err=> {console.log(err)
      this.toastr.error(err)
    })
  }
  msg
  price
  obj = {}
  order
  addtocart(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   }; 
    this.http.post('https://namasteguru.herokuapp.com/api/student/addtocart', this.obj,httpOptions)
    .toPromise()
    .then((a:any)=>{
        console.log(a)

      this.msg = a.message.message
      this.toastr.success(this.msg)
      // console.log(this.msg)
      // this.price = a.message.price
    })
    .catch(err=> {console.log(err)
      this.msg = err.error.message 
      this.toastr.error(this.msg)
    })
  }
  enroll(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   }; 
    this.http.post('https://namasteguru.herokuapp.com/api/student/enrollnow', this.obj,httpOptions)
    .toPromise()
    .then((a:any)=>{
        console.log(a)

      this.order = a.message.orderId
      // console.log(this.msg)
      // this.price = a.message.price
    })
    .catch(err=> console.log(err))
  }
}

