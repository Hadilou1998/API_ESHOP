import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable
({
  providedIn: 'root'
})

export class UserService 
{
  // Node/Express API
  private serverUrl = environment.serverUrl

  // Http Header
  optionRequete = {
    headers: new HttpHeaders
    ({            
      'Content-Type': 'application/json'
    }), responseType: 'text' as 'json'
  };

  constructor(private httpClient: HttpClient) { }

  // Get info by current user
  getUserInfo()
  {
    return this.httpClient.get<User>(`${this.serverUrl}/me`);
  }

  // Get all objects
  GetUsers()
  {
    return this.httpClient.get(`${this.serverUrl}/users`);
  }

  // Update
  updateUser(id: number, user: User): Observable<any>
  {
    return this.httpClient.put(`${this.serverUrl}/user/${id}`, user).pipe
    (
      catchError(this.handleError)
    );
  }

  // Get single object
  GetUser(id: number): Observable<any>
  {
    return this.httpClient.get<User>(`${this.serverUrl}/user/${id}`).pipe
    (
      map((res: any) => 
      {
        return res || {}
      }),
      catchError(this.handleError)
    );
  }
  
  // Delete
  deleteUser(id: number, role: string): Observable<any>
  {
    return this.httpClient.delete(`${this.serverUrl}/user/${id}`).pipe
    (
      catchError(this.handleError)
    );
  }

  // Delete all objects
  DeleteUsers()
  {
    return this.httpClient.delete(`${this.serverUrl}/users`);
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
