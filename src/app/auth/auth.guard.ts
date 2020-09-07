import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
// export class AuthGuard implements CanActivate {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
// }
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth : AuthService ,
    private dbService: NgxIndexedDBService,public jwtHelper: JwtHelperService) { 
        
    }
  token 
  decodedToken   
  expirationDate 
  isExpired      
  expectedRole   
  helper = new JwtHelperService();
 
  getName(){ 
    // console.log(this.token)
    return this.decodedToken.name
  }
  getToken(){
    return this.token
  }
  getDecoded(){
    return this.decodedToken
  }
  getIsVerified(){
    return this.decodedToken.kycverified
  }
  getDp(){
    return this.decodedToken.display_pic 
  }
  getUid(){
    return this.decodedToken._id
  }
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     await this.dbService.getAll('token').then(
      async (person: any) => {  
        if(person.length == 0){
          this.router.navigate(['']);
        }
        this.token =   await person[0].token  
      },
      error => {
          console.log(error);
      }
    ); 
    // console.log(this.token)
    this.decodedToken   = this.helper.decodeToken(this.token);
    this.expirationDate = this.helper.getTokenExpirationDate(this.token);
    this.isExpired      = this.helper.isTokenExpired(this.token);
    this.expectedRole   = next.data.expectedRole;
    // console.log(expectedRole)
    console.log(this.decodedToken)
    // console.log(expirationDate)
    // console.log(this.isExpired) 
    if (!this.isExpired  && this.expectedRole == this.decodedToken.role){
      return true;
    }  
    this.router.navigate(['']);
    return false;
  }
}