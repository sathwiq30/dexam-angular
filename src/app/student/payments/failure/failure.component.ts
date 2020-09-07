import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent implements OnInit {


  constructor(private http : HttpClient,private auth : AuthGuard,private route: ActivatedRoute) { }
id
  ngOnInit() {
    this.route.params.subscribe(a=>{
      // console.log(a.id)
      this.id = a.id
    })
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    this.http.get('https://namasteguru.herokuapp.com/api/student/payment/'+this.id , httpOptions )
    .toPromise()
    .then((succ: any )=>{
      console.log(succ)     
    }
    )
    .catch(err=> console.log(err))
  }

}
