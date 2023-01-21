import { HttpEvent, HttpInterceptor, HttpHandler, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "../service/auth.service";

@Injectable()

export class JwtInterceptor implements HttpInterceptor
{
    constructor(private authService: AuthService) 
    {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        let token = this.authService.userSubject.value;
        if (token) 
        {
            req = req.clone
            ({ 
                headers: new HttpHeaders
                ({
                    'Content-Type'  : 'application/json',
                    'Authorization' : `Bearer ${token}`
                })   
            })
        }    
        
        return next.handle(req);
    }
}