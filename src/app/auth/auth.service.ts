import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxIndexedDBService } from 'ngx-indexed-db';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token 
  helper = new JwtHelperService();
  decodedToken
  expirationDate
  isExpired

  constructor (    dbService: NgxIndexedDBService ) {  

 }
    getTOken(){ 
      console.log(this.isExpired)
      console.log(this.decodedToken)
      console.log(this.token)
      return this.token
    }
}