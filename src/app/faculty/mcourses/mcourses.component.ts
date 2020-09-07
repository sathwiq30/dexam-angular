import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { Observable, interval } from 'rxjs';
import { NguCarouselConfig } from '@ngu/carousel';
import { map, take, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-mcourses',
  templateUrl: './mcourses.component.html',
  styleUrls: ['./mcourses.component.css']
})
export class McoursesComponent implements OnInit {
  courses = []
  constructor(private http : HttpClient, private auth : AuthGuard,private cdr: ChangeDetectorRef) { }
  @Input() name: string;
  imgags = [
     '', '','',''
  ];

  public carouselTileItems: Array<any> = [
    {
      icon: "./assets/images/landing/services/service1.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Service One"
    },
    {
      icon: "./assets/images/landing/services/services14.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Service Two"
    },
    {
      icon: "./assets/images/landing/services/services15.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Service Three"
    },
    {
      icon: "./assets/images/landing/services/services16.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Service Four"
    },
    {
      icon: "./assets/images/landing/services/services9.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Service Five"
    },
    {
      icon: "./assets/images/landing/services/services6.svg",
      text: `Adipisci quas repellat sed. Quasi quaerat aut nam possimus
    vitae dignissimos, sapiente est atque tenetur`,
      title: "Service Six"
    }
  ];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md:3, lg: 4, all: 0 },
    slide: 4,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };


  public carouselTileItems$: Observable<number[]>;
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
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
   
  isLoading = true
  ngOnInit() {
    var headers_object = new HttpHeaders({ 
      'Authorization': "Bearer " + this.auth.getToken()
   })
   const httpOptions = {
     headers: headers_object
   };

    this.http.get('https://namasteguru.herokuapp.com/api/faculty/assigned/course', httpOptions)
      .toPromise()
      .then((a: any )=>{
        console.log(a)
        this.courses = a.data.assigned
        this.courses.forEach((c, i)=>{
          this.isLoading = false
        })
      })
      .catch(err=>{
        console.log(err)
      })



      this.tempData = [];
      // this.carouselTileItems$ = interval(500).pipe(
      //   startWith(-1),
      //   take(12),
      //   map(val => {
      //     const data = (this.tempData = [
      //       ...this.tempData,
      //       this.imgags[Math.floor(Math.random() * this.imgags.length)]
      //     ]);
      //     return data;
      //   })
  // );
  }



  
}
