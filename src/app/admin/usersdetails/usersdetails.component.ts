import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { AuthGuard } from '../auth.guard';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usersdetails',
  templateUrl: './usersdetails.component.html',
  styleUrls: ['./usersdetails.component.scss']
})
export class UsersdetailsComponent implements OnInit {

  constructor(private http : HttpClient,private auth : AuthGuard , private router :  ActivatedRoute) { }
user
id
isLoading = true
edit = true
  ngOnInit(): void {
    this.router.params.subscribe(d=>{
      this.id = d.id
         this.getData(d.id) 
    })
  }
  getData(id){
     
      var headers_object = new HttpHeaders({ 
        'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    }; 
    this.http.get('https://namasteguru.herokuapp.com/api/admin/getFaculty/'+id , httpOptions)
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
  this.http.post('https://namasteguru.herokuapp.com/api/admin/faculty/user-verification/'+this.user._id ,{},  httpOptions)
  .toPromise()
  .then((a: any)=>{ console.log(a)
  
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
    console.log(this.auth.getToken())
    this.http.post('https://namasteguru.herokuapp.com/api/admin/user-re-verication/'+this.user._id ,{},  httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
    
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
  this.http.post('https://namasteguru.herokuapp.com/api/admin/faculty/unblock/'+this.user._id ,{},  httpOptions)
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
    this.http.post('https://namasteguru.herokuapp.com/api/admin/faculty/block/'+this.user._id ,{},  httpOptions)
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
    this.http.post('https://namasteguru.herokuapp.com/api/admin/faculty/deleteslot/'+this.user._id , data,  httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
      this.getData(this.id)
    }) 
    .catch(e=> console.log(e))
    
  }



}
