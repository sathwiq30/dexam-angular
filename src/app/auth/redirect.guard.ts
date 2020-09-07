import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  constructor(private router: Router, private auth : AuthService ,
    private dbService: NgxIndexedDBService,public jwtHelper: JwtHelperService) { }
  token 
 
  helper = new JwtHelperService();
 
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
     await this.dbService.getAll('token').then(
      (person: any) => { 
        if(person.length == 0){ 
          this.router.navigate(['auth/']);
          return false
        }
        this.token = person[0].token
      },
      error => {
          console.log(error);
          this.router.navigate(['auth/']);
          return false
      }
    );     
    
    let decodedToken = this.helper.decodeToken(this.token);
    this.router.navigate([decodedToken.role])
    return true
  }
}
