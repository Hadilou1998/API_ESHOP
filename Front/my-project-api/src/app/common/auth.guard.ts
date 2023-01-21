import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";

@Injectable
({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate
{
    constructor(private authService: AuthService, private router: Router) 
    {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
    {
        let token = localStorage.getItem('UserToken');
        if (token) 
        {
            return true;
        }
        
        this.router.navigate(['login'], {queryParams: {returnUrl: state.url}})
        return false;
    }
}