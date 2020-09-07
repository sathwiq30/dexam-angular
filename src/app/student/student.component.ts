import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthGuard } from '../auth/auth.guard';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private dbService : NgxIndexedDBService, private auth : AuthGuard,private route : Router) { 
    
    this.getScreenSize();
  }

  name
  isVerified 
  mode = 'side'
  innerWidth 
  scrHeight:any;
  scrWidth:any;
  Toggle(){
    if(this.scrWidth <500){
      this.isOpened =! this.isOpened
    }
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrHeight = window.innerHeight;
        this.scrWidth = window.innerWidth;
        console.log(this.scrHeight, this.scrWidth);
  }
 dp 
  ngOnInit() {
    this.name = this.auth.getName()
    this.dp =this.auth.getDp()
    console.log(this.auth.getDp())
    if(this.scrWidth < 500){ 
      this.mode = 'over' 
      this.isOpened = false
    }
    
  }
  logout(){
    this.dbService.clear('token')
    .then(a=>{ 
      this.route.navigateByUrl('auth/login')
      console.log('logged out success full')})
  }
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  isExpanded =true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isOpened = false
  open(){
    this.isOpened = !this.isOpened
    // this.isExpanded = !this.isExpanded
  }
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
