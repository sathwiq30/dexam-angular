import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NgxIndexedDBService } from 'ngx-indexed-db'; 
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
 
  ngOnInit() {
    this.name = this.auth.getName()
    
  
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
  isOpened = true
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



 

// router.post('/faculty/block/:uid',blockFaculty);
// router.post('/faculty/unblock/:uid',unBlockFaculty);

// router.post('/student/block/:uid',blockStudent);
// router.post('/student/unblock/:uid',unBlockStudent);