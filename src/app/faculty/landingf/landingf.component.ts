import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { startWith, take, map } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel'; 
import { AuthGuard } from 'src/app/auth/auth.guard';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-landingf',
  templateUrl: './landingf.component.html',
  styleUrls: ['./landingf.component.css']
})
export class LandingfComponent implements OnInit {
  @Input() name: string;
  imgags = [
     '', '','',''
  ];
  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 6, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: false,
    interval: { timing: 15000000000000000000000 },
    animation: 'lazy'
  };
  tempData: any[];
  isVerified
  f 
  rekyc
  constructor( private auth : AuthGuard,private cdr: ChangeDetectorRef ,
     private http : HttpClient ,private dbService: NgxIndexedDBService) {}
  isLoading = true
  ngOnInit() {
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };
    console.log('ss')
    this.http.get('https://namasteguru.herokuapp.com/api/faculty/getkycstatus', httpOptions)
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
    // this.isVerified= this.auth.getIsVerified()
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(12),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }
}
