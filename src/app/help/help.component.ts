import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router , ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  status: string,
  ticketId  : string,
  _id  : string,
}

// let ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Change', weight: 'lorem ipsum lorem' , symbol: 'pending'},
//   {position: 2, name: 'Change', weight: 'lorem ipsum lorem' , symbol: 'completed'},
//   {position: 3, name: 'Change', weight: 'lorem ipsum lorem' , symbol: 'pending'},
//   {position: 4, name: 'Change', weight: 'lorem ipsum lorem' , symbol: 'completed'}, 
// ];
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private http : HttpClient, private auth : AuthGuard,private _snackBar: MatSnackBar , private router : Router,
    private route : ActivatedRoute) { }
  displayedColumns: string[] = ['position','id' , 'name'   ];
  // dataSource = ELEMENT_DATA;
  dataSource: MatTableDataSource<PeriodicElement>;
url 
  ngOnInit() {
     this.url = this.router.url.slice(1,8)

      console.log ( this.url )
      this.getUsers()
      this.getQUeries()
  }
  users
  isLoading =  true
  async getUsers(){ var headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    }; 
    await this.http.get('https://namasteguru.herokuapp.com/api/'+this.url+'/tickets', httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
    this.users =   a.data
      this.isLoading = false

    }) 
    this.dataSource = new MatTableDataSource(this.users);
    // return users
    console.log(this.users)
 
  }
  queries
  isLoading2 = true
  async getQUeries(){ var headers_object = new HttpHeaders({ 
    'Authorization': "Bearer " + this.auth.getToken()
    })
    const httpOptions = {
      headers: headers_object
    }; 
    await this.http.get('https://namasteguru.herokuapp.com/api/gethelpcenter', httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
    this.queries =   a.data 
      this.isLoading2 = false
    })  
    // return users 

    // /api/gethelpcenter
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
 

      console.log(form.value.des)
      this.http.post('https://namasteguru.herokuapp.com/api/'+this.url+'/createticket',
      {
        'query' : form.value.style,
        'description' : form.value.des
      },  httpOptions)
      .toPromise()
      .then(a=>{ console.log(a)
        this.openSnackBar('added successfully' ) 
        this.getUsers()
        form.resetForm()
        this.isLoading3 = false
      })
      .catch(err=> {
        console.log(err)
        this.openSnackBar('failed to send' )
        this.isLoading3 = false
      })
 
  }

}
