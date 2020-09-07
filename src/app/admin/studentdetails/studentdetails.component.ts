import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { AuthGuard } from '../auth.guard';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {

 
  constructor(private http : HttpClient,private auth : AuthGuard , private router :  ActivatedRoute,  private route : Router) { }
user
isLoading = true 
weekend = []
weekday = []
edit = true
id
url
u
  ngOnInit(): void {
    this.url = this.route.url.slice(7,14)
    console.log(this.url)
    if(this.url == 'student'){
      this.u = 'Student'
    }else{
      this.u= 'Faculty'
    }
    this.router.params.subscribe(d=>{
      console.log(d.id)
      this.getData(d.id)
      this.id = d.id
    })
     
   
  }
  getData(id){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  }; 
  console.log(this.u)
  this.http.get('https://namasteguru.herokuapp.com/api/admin/get'+this.u+'/'+id , httpOptions)
.toPromise()
.then((a: any)=>{ console.log(a)
  this.user = a.data[0]
 
  console.log(this.user)
  this.isLoading = false
}) 
  }
  accept(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  }; 
  console.log(this.auth.getToken())
  this.http.post('https://namasteguru.herokuapp.com/api/admin/'+this.url+'/user-verification/'+this.user._id ,{},  httpOptions)
  .toPromise()
  .then((a: any)=>{ console.log(a)
    this.getData(this.id)
  }) 
  .catch(e=> console.log(e))
  
  }
  reject(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    };  
    this.http.post('https://namasteguru.herokuapp.com/api/admin/'+this.url+'/user-re-verification/'+this.user._id ,{},  httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
      this.getData(this.id)
    }) 
    .catch(e=> console.log(e))
    
  }

  activate(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  }; 
  console.log(this.auth.getToken())
  this.http.post('https://namasteguru.herokuapp.com/api/admin/'+this.url+'/unblock/'+this.user._id ,{},  httpOptions)
  .toPromise()
  .then((a: any)=>{ console.log(a)
    this.getData(this.id)
  }) 
  .catch(e=> console.log(e))
  
  }
  deactivate(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    };  
    this.http.post('https://namasteguru.herokuapp.com/api/admin/'+this.url+'/block/'+this.user._id ,{},  httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
      this.getData(this.id)
    }) 
    .catch(e=> console.log(e))
    
  }
  delete(type,t , value){
    console.log(type)
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    };  
    let data = {}
    data['type'] = type
    data[''+t ] = value
    // let formData = new FormData()
    // formData.append('type', type)
    // formData.append(''+type, value)
    this.http.post('https://namasteguru.herokuapp.com/api/admin/'+this.url+'/deleteslot/'+this.user._id , data,  httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
      this.getData(this.id)
    }) 
    .catch(e=> console.log(e))
    
  }

}
