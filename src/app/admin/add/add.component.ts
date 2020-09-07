import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthGuard } from '../auth.guard';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor( private http: HttpClient,   private auth : AuthGuard, private tostr : ToastrService) { }
  selected =-1
  classes  =[]
  standard = false
  data
  which
  ngOnInit(): void {
   this.getData()
    // this.http.get('https://namasteguru.herokuapp.com/api/getclasses', )
    // .toPromise()
    // .then((succ: any )=>{
    //   console.log(succ)  
    //   this.isLoading = false
    //   this.classes = succ.data
    // }
    // )
    // .catch(err=> console.log(err))

  }

  getData(){

    this.http.get('https://namasteguru.herokuapp.com/api/admin/getallslots', )
    .toPromise()
    .then((succ: any )=>{
      console.log(succ)    
      this.classes = succ.message.classes
      this.data = succ.message 

    }
    )
    .catch(err=> console.log(err))
  }
  isLoading
  onAddClass(form  : NgForm) {
    if (form.invalid) {
      return;
    }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  };
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/admin/add/class',
    {  "class": form.value.email,   
    },
    httpOptions)
    .toPromise()
    .then((succ: any )=>{ 
      this.tostr.success('added succesfully')
      this.getData()
      console.log(succ)  
      this.isLoading = false
    }
    )
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
     
  }
  onAddQ(form  : NgForm) {
    if (form.invalid) {
      return;
    }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  };    
  let formData = new FormData()
  formData.append( 'helpcenter[0][questions]', form.value.name) 
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/admin/add/slots',
     formData,
    httpOptions)
    .toPromise()
    .then((succ: any )=>{this.tostr.success('added succesfully')
     this.getData()
      console.log(succ)  
      this.isLoading = false
    }
    )
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
     
  }
  onAddM(form  : NgForm) {
    if (form.invalid) {
      return;
    }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  };    
  let formData = new FormData()
  formData.append( 'medium[0][language]', form.value.name) 
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/admin/add/slots',
     formData,
    httpOptions)
    .toPromise()
    .then((succ: any )=>{
      this.tostr.success('added succesfully')
       this.getData()
      console.log(succ)  
      this.isLoading = false
    }
    )
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
     
  }
  onAddSlots(form  : NgForm) { 
    if (form.invalid) {
      return;
    }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  };    
  let formData = new FormData()
  formData.append(form.value.type+'[0][name]', form.value.name)
  if(form.value.start)
    formData.append(form.value.type+'[0][start]', form.value.start)
  if(form.value.end)
    formData.append(form.value.type+'[0][end]', form.value.end)
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/admin/add/slots',
     formData,
    httpOptions)
    .toPromise()
    .then((succ: any )=>{
      this.tostr.success('added succesfully') 
      this.getData()

      console.log(succ)  
      this.isLoading = false
    }
    )
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
     
  }
  onAddSt(form  : NgForm) { 
    if (form.invalid) {
      return;
    }
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  };    
  let formData = new FormData()
  formData.append( 'standard[0][name]', form.value.name) 
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/admin/add/slots',
     formData,
    httpOptions)
    .toPromise()
    .then((succ: any )=>{ this.tostr.success('added succesfully')
    this.getData()
      console.log(succ)  
      this.isLoading = false
    }
    )
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
     
  }
  onAddSubjects(form  : NgForm) {
    if(form.value.pre){}
      // console.log(form.value.pre)
    else{
      form.value.pre = false
      // console.log(form.value.pre)
    }
    if (form.invalid) {
      return;
    }
    console.log(this.classes[form.value.type]._id)
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  };  
  let subject= []
  subject.push({
    name : form.value.email,
    price : ''+form.value.price,
    premium :  form.value.pre
  }) 
    this.isLoading = true;
    this.http.post('https://namasteguru.herokuapp.com/api/admin/add/'+this.classes[form.value.type]._id+'/subject',
     {
       subject
     },
    httpOptions)
    .toPromise()
    .then((succ: any )=>{
      this.tostr.success('added succesfully')
       this.getData()
      console.log(succ)  
      this.isLoading = false
      this.selected =-1
      form.reset()
    }
    )
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
     
  }

}
