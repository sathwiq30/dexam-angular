import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from '../auth.guard';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  isLoading = false
  constructor( private http: HttpClient,   private auth : AuthGuard , private tostr : ToastrService) { }
uid
  ngOnInit(): void {
    this.uid = this.auth.getDecoded()._id  
    this.getData()
  }
  data
  getData(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  }; 
    this.http.get('https://namasteguru.herokuapp.com/api/admin/admins', httpOptions)
    .toPromise()
    .then((succ: any )=>{
      console.log(succ)     
      this.data = succ.message 

    }
    )
    .catch(err=> console.log(err))
  }
  onAddSubjects(form  : NgForm) {
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
    this.http.post('https://namasteguru.herokuapp.com/api/admin/addadmin',
     {
        name : form.value.user,
        email : form.value.email,
        contact : form.value.number,
        role : form.value.role
     },
    httpOptions)
    .toPromise()
    .then((succ: any )=>{ this.getData()
      console.log(succ)  
      this.isLoading = false 
      form.reset()
      this.tostr.success('added successfully')
    }
    )
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
     
  }

  
  activate(id){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
  })
  const httpOptions = {
    headers: headers_object
  }; 
  console.log(this.auth.getToken())
  this.http.post('https://namasteguru.herokuapp.com/api/admin/unblockadmin/'+id  ,{},  httpOptions)
  .toPromise()
  .then((a: any)=>{ console.log(a)
    this.getData( )
    this.tostr.success('activated successfully')

  }) 
  .catch(err=>{ console.log(err)
    this.tostr.error('error')
  })
  
  }
  deactivate(id){
    console.log(id)
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    };  
    this.http.post('https://namasteguru.herokuapp.com/api/admin/blockadmin/'+id ,{},  httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
      this.getData( )
      this.tostr.success('deactivated successfully')

    }) 
    .catch(err=>{ console.log(err)
      this.tostr.error('error')
    })
    
  }
}
