import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { AuthGuard } from '../auth.guard';
import { Router } from '@angular/router';
export interface UserData {
  contact: string,
  email: string,
  kycverified: boolean,
  name: string,
  profession: string,
  degree: string
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


  displayedColumns: string[] = [ 'name', 'id','progress', 'color' ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private http  : HttpClient ,  private auth : AuthGuard, private router : Router) {
   
   let users
    
    // Create 100 users
    users =  this.getUsers() 
    // Assign the data to the data source for the table to render
   
  } 
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  users
  async getUsers(){ var headers_object = new HttpHeaders({ 
          'Authorization': "Bearer " + this.auth.getToken()
      })
      const httpOptions = {
        headers: headers_object
      }; 
    await this.http.get('https://namasteguru.herokuapp.com/api/admin/getStudents' , httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
      this.users =   a.data
    }) 
    this.dataSource = new MatTableDataSource(this.users);
    // return users
    console.log(this.users)
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  open(i){
    console.log(this.users[i]._id)
    this.router.navigateByUrl('admin/student/userdetails/'+this.users[i]._id)
  }
}