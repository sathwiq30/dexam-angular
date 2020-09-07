import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel'; 
import { AuthGuard } from 'src/app/auth/auth.guard'; 
import { NgxIndexedDBService } from 'ngx-indexed-db';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  isVerified
  f 
  rekyc
  constructor( private auth : AuthGuard , private http : HttpClient ,private dbService: NgxIndexedDBService) {}
  isLoading = true
  ngOnInit() {
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    console.log('ss')
    this.http.get('https://namasteguru.herokuapp.com/api/student/getkycstatus', httpOptions)
    .toPromise()
    .then((c : any)=>{  
      console.log(c)
      this.isVerified = c.message.kycverified 
      this.f = c.message.fullprofilecompleted
      this.rekyc = c.message.rekyc
      this.isLoading = false
      this.dbService.clear('kyc')
      this.dbService.add('kyc' , { 
        kyc : this.isVerified 
      })
      .then(a=> { console.log('added')})
      .catch(err=> console.log(err))
    })
    .catch(err=>{
      console.log(err)
    })
  }

}
