import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable
({
  providedIn: "root"
})

export class RoleGuard implements CanActivate 
{
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    let role = localStorage.getItem('role');

    if (role === "admin") 
    {
      return true;  
    }
    this.router.navigateByUrl('products');
    return false;
  }
};