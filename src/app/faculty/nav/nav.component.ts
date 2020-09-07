import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() open = new EventEmitter()
  @Output() logout = new EventEmitter()
  constructor( private router : Router, private auth : AuthGuard) { }
  isAdmin = false
  isChef = false
  isStudent = false 

  name
  ngOnInit() {
    this.name = this.auth.getName()
  }

}
