import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],

    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  carousel= [1,2,33,4,5,67,8,2,86,4,2,1] 
  constructor() {
    
   }

  ngOnInit() {

  }
  ngAfterViewInit(){
    let c =document.getElementsByClassName('owl-next')
   
    console.log(c)
    c[0].innerHTML = '>'
    c[0].classList.add('rel')
  }

}
