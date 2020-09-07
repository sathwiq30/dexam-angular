import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class JobsGuard implements CanActivate  {
  constructor(private router: Router,  
    private dbService: NgxIndexedDBService ) { 
        
    }
    job
  async canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      await this.dbService.getAll('token').then(
        async (person: any) => { 
          console.log(person)
          this.job =   await person[0].job 
        },
        error => {
            console.log(error);
        }
      ); 
      let expectedJob = next.data.expectedRole; 
      if (  expectedJob.indexOf(this.job) >=0 ){ 

        return true;
      }  
      this.router.navigate(['/admin/login']);
      return false;

    return true;
  }
  
}
