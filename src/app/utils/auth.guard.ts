import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate{
  constructor(private router:Router){
   
  }

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | 
    Promise<boolean | UrlTree> {
      const tok=localStorage.getItem("");
      //console.log(tok);
      const token =localStorage.getItem('token')
      //console.log("valor token:"+token);
      if(token===undefined||token===null){
      this.router.navigate(['/MuchasMatematicas'])
      }
        return true; 
    } 
}