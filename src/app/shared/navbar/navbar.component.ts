import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  @Output() open = new EventEmitter()
  @Output() logout = new EventEmitter()
  constructor( private router : Router) { }
  isAdmin = false
  isChef = false
  isStudent = false
  ngOnInit() {
   
  }
   
}

