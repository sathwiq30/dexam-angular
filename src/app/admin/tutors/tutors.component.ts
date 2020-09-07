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
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'id','progress', 'color', 'profession'];
  dataSource: MatTableDataSource<UserData>;

  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private http  : HttpClient ,  private auth : AuthGuard, private router : Router) {
   
   let users
    
    // Create 100 users
    users =  this.getUsers() 
    // Assign the data to the data source for the table to render
   
  } 
  users
  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  
  async getUsers(){ var headers_object = new HttpHeaders({ 
          'Authorization': "Bearer " + this.auth.getToken()
      })
      const httpOptions = {
        headers: headers_object
      };
    let users
    await this.http.get('https://namasteguru.herokuapp.com/api/admin/getFaculty' , httpOptions)
    .toPromise()
    .then((a: any)=>{ console.log(a)
      this.users =   a.data


    }) 
    this.dataSource = new MatTableDataSource(this.users);
    // return users
    console.log(users)
  }

  open(i){
    console.log(this.users[i]._id)
    this.router.navigateByUrl('admin/facutlty/userdetails/'+this.users[i]._id)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }