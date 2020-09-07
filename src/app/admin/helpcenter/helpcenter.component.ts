import { Component, OnInit } from '@angular/core';
   
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AuthGuard } from '../auth.guard';
import { ToastrService } from 'ngx-toastr';
export interface PeriodicElement {
  status: string,
  ticketId  : string,
  _id  : string,
}
 
@Component({
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.component.html',
  styleUrls: ['./helpcenter.component.scss']
})
export class HelpcenterComponent implements OnInit {

  

  constructor(private http : HttpClient, private auth : AuthGuard, private t : ToastrService , private router : Router) { }
  displayedColumns: string[] = ['position'  , 'name'    ];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<PeriodicElement>;

  ngOnInit() {
    
      this.getUsers() 
  }
  users
  isLoading =  true
  async getUsers(){ var headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    }; 
    await this.http.get('https://namasteguru.herokuapp.com/api/admin/tickets', httpOptions)
    .toPromise()
    .then((a: any)=>{ 
      console.log(a)
    this.users =   a.data
      this.isLoading = false

    }) 
    this.dataSource = new MatTableDataSource(this.users);
    // return users
    console.log(this.users)
 
  }
  queries
  isLoading2 = true 
 
  onAdd(form:NgForm){ 
    
    if(form.invalid){ 
      return
    } 
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
 

      console.log(form.value.des)
      this.http.post('https://namasteguru.herokuapp.com/api/faculty/createticket',
      {
        'query' : form.value.style,
        'description' : form.value.des
      },  httpOptions)
      .toPromise()
      .then(a=>{ console.log(a)
        this.t.success('added successfully' ) 
        this.getUsers()
        form.resetForm()
      })
      .catch(err=> {
        console.log(err)
        this.t.error('failed to send' )
      })
 
  }

}
