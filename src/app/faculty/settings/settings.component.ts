import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/auth/auth.guard';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private auth : AuthGuard) { }
  details
  ngOnInit() {
    this.details = this.auth.getDecoded()

  }

}
