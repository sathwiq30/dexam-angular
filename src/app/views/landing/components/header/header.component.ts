import {
  Component,
  OnInit,
  HostListener,
  HostBinding,
  Inject,
  Input
} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {WINDOW_PROVIDERS, WINDOW} from "../../helpers/window.helpers";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  isFixed;
  public isCollapsed = true;
  constructor(private http : HttpClient,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}
data
  ngOnInit() {
    this.http.get('https://namasteguru.herokuapp.com/api/admin/getallslots', )
    .toPromise()
    .then((succ: any )=>{
      console.log(succ)    
      // this.classes = succ.message.classes
      this.data = succ.message 

    }
    )
    .catch(err=> console.log(err))
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset =
      this.window.pageYOffset ||
      this.document.documentElement.scrollTop ||
      this.document.body.scrollTop ||
      0;
    if (offset > 10) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  @HostBinding("class.menu-opened") menuOpened = false;

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }
  hidemenu() {
    this.isCollapsed = true;
  }
}
