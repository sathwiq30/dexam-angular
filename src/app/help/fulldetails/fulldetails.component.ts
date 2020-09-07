import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ScollToBottomDirective } from './scoll-to-bottom.directive';

@Component({
  selector: 'app-fulldetails',
  templateUrl: './fulldetails.component.html',
  styleUrls: ['./fulldetails.component.scss']
})
export class FulldetailsComponent implements OnInit {
  @ViewChild(ScollToBottomDirective)
  scroll: ScollToBottomDirective;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  constructor(private http : HttpClient, private auth : AuthGuard,
    private _snackBar: MatSnackBar, private router :  ActivatedRoute ,
    private route : Router ) { }
  id
  url
    isLoading = true
  ngOnInit(): void {
    this.url = this.route.url.slice(1,8)
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
    await this.http.get('https://namasteguru.herokuapp.com/api/'+this.url+'/ticket/'+id, httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
    this.users =   a.data
      this.isLoading = false

    })  
    // return users
    console.log(this.users)
  }
  

  openSnackBar(message: string ) {
    this._snackBar.open(message, '', {
      duration: 2000,
    });
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
 


    this.http.post('https://namasteguru.herokuapp.com/api/'+this.url+'/updateticket/'+this.id,
    { 
      'description' : form.value.des
    } ,  httpOptions)
    .toPromise()
    .then(a=>{ 
      this.getUsers(this.id)
      console.log(a)
      this.openSnackBar('replied successfully' ) 
      form.resetForm()
      this.isLoading3 = false
    })
    .catch(err=> {
      console.log(err)
      this.openSnackBar('failed to update' )
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
  

    this.http.post('https://namasteguru.herokuapp.com/api/faculty/ticket/'+this.id+'/close',
    {  
    } ,  httpOptions)
    .toPromise()
    .then(a=>{ 
      this.getUsers(this.id)
      console.log(a)
      this.openSnackBar('closed successfully' )  
      this.route.navigateByUrl('faculty/help')
    })
    .catch(err=> {
      console.log(err)
      this.openSnackBar('failed to update' )
    })
  }
}
