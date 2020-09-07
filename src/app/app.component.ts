import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "dexam";
  constructor(private router: Router, private toastr: ToastrService) {} 
  ngOnInit() { 
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  // onActivate(event) {
  //   window.scroll(0, 0);
  // }

  showSuccess() { 
    this.toastr.success('Hello world!' );
    this.toastr .error('everything is broken', 'Major Error', {
      timeOut: 3000,
      closeButton : true
    });
  }
}
