import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "../service/auth.service";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()

export class ErrorInterceptor implements HttpInterceptor
{
    constructor(private authService: AuthService)
    {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        return next.handle(req).pipe(catchError(err => 
        {
            if ([401, 403].indexOf(err.status) !== -1) 
            {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authService.logout();    
            }
            const error = err.error.message || err.statusText;
            return throwError(() => new Error('Warning!' + error));
        }))
    }
}