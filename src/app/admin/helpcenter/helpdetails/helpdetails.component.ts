import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthGuard } from '../../auth.guard';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-helpdetails',
  templateUrl: './helpdetails.component.html',
  styleUrls: ['./helpdetails.component.scss']
})
export class HelpdetailsComponent implements OnInit {

 
 
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(private http : HttpClient, private auth : AuthGuard,
    private t :ToastrService  , private router :  ActivatedRoute ,
    private route : Router ) { }
  id
    isLoading = true
  ngOnInit(): void {
    this.router.params.subscribe(d=>{
      console.log(d.id)
      this.id = d.id
    this.getUsers(d.id)
    }
    ) 
  }users
  async getUsers(id){ var headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    }; 
    await this.http.get('https://namasteguru.herokuapp.com/api/admin/ticket/'+id, httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
    this.users =   a.data
      this.isLoading = false

    })  
    // return users
    console.log(this.users)
  }
  

 
  isLoading3 = false
  onAdd(form:NgForm){ 
    
    if(form.invalid){ 
      return
    } 
    this.isLoading3 = true
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    };
 


    this.http.post('https://namasteguru.herokuapp.com/api/admin/ticket/'+this.id,
    { 
      'description' : form.value.des
    } ,  httpOptions)
    .toPromise()
    .then(a=>{ 
      this.getUsers(this.id)
      console.log(a)
      this.t.success('replied successfully' ) 
      form.resetForm()
      this.isLoading3 = false
    })
    .catch(err=> {
      console.log(err)
      this.t.error('failed to update' )
      this.isLoading3 = false
    })
  }

  close(){
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    };
  

    this.http.post('https://namasteguru.herokuapp.com/api/admin/ticket/'+this.id+'/close',
    {  
    } ,  httpOptions)
    .toPromise()
    .then(a=>{ 
      this.getUsers(this.id)
      console.log(a)
      this.t.success('closed successfully' )  
      // this.route.navigateByUrl('admin/helpcenter')
    })
    .catch(err=> {
      console.log(err)
      this.t.error('failed to update' )
    })
  }
}
