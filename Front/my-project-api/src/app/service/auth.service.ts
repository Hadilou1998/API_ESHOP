import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})

export class AuthService
{
  // Node/Express API
  private serverUrl = environment.serverUrl;

  // Http Header
  optionRequete = 
  {
    headers: new HttpHeaders
    ({            
      'Content-Type': 'application/json'
    })/*, responseType: 'text' as 'json'*/
  };
  
  // Observable
  public user: Observable<string>
  public userSubject: BehaviorSubject<string>

  constructor(private httpClient: HttpClient, private router: Router) 
  {
    this.userSubject = new BehaviorSubject<string>(localStorage.getItem('UserToken') || '');
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): string
  {
    return this.userSubject.value;
  }

  // Authentification
  isAuthenticated(): boolean
  {
    const token = localStorage.getItem('UserToken');
    if (!token) 
    {
      console.log("Token doesn't exists");
      return false; 
    } 
    else 
    {
      console.log("Token exists");
      return true;  
    }
  }

  // jwt token is valid
  isTokenExpired(): boolean
  {
    return false;
  }

  // Register
  register(username: string, password: string, role: string, email: string, adresse: string): Observable<any> 
  {
    return this.httpClient.post(`${this.serverUrl}/register`, {username: username, password: password, role: role, email: email, adresse: adresse}).pipe
    (
      catchError(this.handleError)
    );
  }

  // Login
  login(username: string, password: string)
  {
    return this.httpClient.post<any>(`${this.serverUrl}/login`, { username: username, password: password }, this.optionRequete).pipe(map(user => 
    {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('UserToken', JSON.stringify(user));
      this.userSubject.next(user); 
      return user;  
    }));
  }

  // decode token
  decode()
  {
    return jwtDecode(localStorage.getItem('UserToken') || '');
  }
  
  // logout
  logout()
  {
    // remove user from local storage to log user out
    localStorage.removeItem('UserToken');
    localStorage.removeItem('role');
    this.userSubject.next(''); 
    this.router.navigateByUrl('login');
  }

  // isLoggedIn
  loggedIn(): boolean
  {
    return (localStorage.getItem('UserToken') !== null);
  }

  // Error
  handleError(error: HttpErrorResponse)
  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) 
    {
      // Handle client error
      errorMessage = error.error.message;
    }
    else
    {
      // Handle server error
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
