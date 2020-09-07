import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  isLoading=  true
  isLoading2=  true
  state = false
  constructor(private http : HttpClient, private auth : AuthGuard,private _snackBar: MatSnackBar , private router : Router, private dbService: NgxIndexedDBService) { }
  classes = []
  subjects = []
  weekday = []
  weekend = []
  days = {
    weekdays :  [{value : '6-7AM' ,available : true  , isSelected : -1 },
     {value : '5-6PM' ,available : true , isSelected : -1 }, {value : '6-7PM' ,available : true , isSelected : -1 }],
    weekends : [
      { value : "7-9AM" , available : true , isSelected : -1 }   , 
    { value : "9-11AM" , available : true , isSelected : -1 }    , 
    { value : "11AM-1PM" , available : true , isSelected : -1 }  , 
    { value : "1-3PM" , available : true , isSelected : -1 }     , 
    { value : "3-5PM" , available : true , isSelected : -1 }    ]

  }

  onSelectedWd(idx, i){
    this.days.weekdays[idx].isSelected = i
    this.days.weekdays[idx].available = false 
  }
  onSelectedWE(idx, i){
    this.days.weekends[idx].isSelected = i
    this.days.weekends[idx].available = false 
  }
      regis
      verified
  ngOnInit() {
    
    this.verified = this.auth.getIsVerified()
    
    this.dbService.getAll('kyc') 
    .then((a: any)=> {
      this.verified = a[0].kyc
    })
    
      // 
    this.getRegis()
  }
  getRegis(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    this.http.get('https://namasteguru.herokuapp.com/api/faculty/getavailableslots', httpOptions)
      .toPromise()
      .then((a: any )=>{ 
        this.classes = a.message.classes
        console.log(a)
        this.classes.map(c =>{
          c.available = true 
          c.isSelected = -1 
        })  
         this.weekend = a.message.weekend
         this.weekday = a.message.weekday 
         
        this.isLoading = false 
      })
      .catch(err=>{
        console.log(err)
      })
      this.http.get('https://namasteguru.herokuapp.com/api/faculty/myregistration', httpOptions)
      .toPromise()
      .then((a: any )=>{  
         console.log(a)
         this.regis = a.message
         this.isLoading2 = false 
      })
      .catch(err=>{
        console.log(err)
      })
  }
   openSnackBar(message: string ) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
  }
  isLoading3 = false
  onAdd(form:NgForm){  
     
    console.log(form.value['subjects0']) 
    if(form.invalid){ 
      return
    } 
    this.isLoading3 = true
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   let stop = false
   const httpOptions = {
     headers: headers_object
   };  
      let formData = new FormData() 

      this.count.forEach((a,i)=>{

        if( form.value['classes'+i] ){
          formData.append('teaches['+i+'][class]', form.value['classes'+i])
          if( form.value['subjects'+i]){
            form.value['subjects'+i].forEach((e,idx)=>{
              formData.append('teaches['+i+'][subjects]['+idx+']' , e)
            })
          }else{
            this.openSnackBar('please select classes and subjects in pair' ) 
            stop = true
          }
        }
      })
      if(stop)  {
        this.isLoading3 = false
        return
      }
 
      if(form.value.duration ){
        formData.append('duration' , form.value.duration)

      } 
      // formData.append('mediums' , form.value.medium) 
      if(form.value.medium ){
        form.value.medium.forEach((element,i) => {
          formData.append('medium['+i+']' , element)
        }); 

      } 
      

       
      // formData.append('standard', form.value.standard)

      if(form.value.standard ){
        form.value.standard.forEach((element,i) => {
          formData.append('standard['+i+']' , element)
        });  
      }
      // form.value.classes.forEach((element,i) => {
      //   formData.append('classes['+i+']' , element)
      // }); 
      if(form.value.weekdays ){
        form.value.weekdays.forEach((element,i) => {
          formData.append('weekday['+i+'][slot]' , element)
          formData.append('weekday['+i+'][available]', 'true')
        });
      }
      if(form.value.weekends ){
        form.value.weekends.forEach((element,i) => {
          formData.append('weekend['+i+'][slot]', element)
          formData.append('weekend['+i+'][available]', 'true')
        });
      }
      // form.value.subjects.forEach((element,i) => {
      //   formData.append('subjects['+i+']' , element)
      // }); 
 

      this.http.post('https://namasteguru.herokuapp.com/api/faculty/createcourse',
      formData ,  httpOptions)
      .toPromise()
      .then(a=>{ console.log(a)
        this.openSnackBar('added successfully' ) 
        this.getRegis()
        this.isLoading3 = false
        form.reset()
      })
      .catch(err=> {
        console.log(err)
        this.openSnackBar('failed to register' )
        this.isLoading3 = false
      })

    return 
      console.log(form.value)
      let obj = form.value
      this.count.forEach(async (a , index)=>{
        console.log()
  
        let formData = new FormData()
        formData.append('name' , obj['name'+index])
        formData.append('duration' ,obj['duration'+index])
        formData.append('subjects' ,obj['subjects'+index])
        formData.append('standard', obj['standard'+index])
        formData.append('classe' ,  obj['classes'+index]) 
        formData.append('mediums' ,obj['medium'+index])
        obj['weekdays'+index].forEach((element, i) => {
          formData.append('weekday['+i+'][slot]' , element)
          formData.append('weekday['+i+'][available]', 'true')
        });
        obj['weekends'+index].forEach((element, i) => {
          formData.append('weekend['+i+'][slot]' , element)
          formData.append('weekend['+i+'][available]', 'true')
        });
  
        await this.http.post('https://namasteguru.herokuapp.com/api/faculty/createcourse',
        formData ,  httpOptions)
        .toPromise()
        .then(a=>{ console.log(a)})
        .catch(err=>{ 
          this.openSnackBar('error' )
          console.log(err)
        })
  
  
        })
  }
  count = [ 
      { subject: 0}
  ] 

  onSelected(idx, i ){
    this.classes[idx].isSelected = i
    this.classes[idx].available = false
    this.count[i].subject= idx
    console.log(this.classes)
  }
  onA(form){
    if(form.invalid){
      return
    }
    console.log(form.value)
    let obj = form.value
  
    for (let index = 0; index < this.count.length; index++) {
      console.log(obj['name'+index])
      
    }
  }
}
