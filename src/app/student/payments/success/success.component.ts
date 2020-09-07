import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private http : HttpClient,private auth : AuthGuard,private route: ActivatedRoute) { }
id
order
isLoading = true
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
      this.order = succ.message
      console.log(this.order) 
      this.isLoading = false
    }
    )
    .catch(err=> console.log(err))
  }

}
