import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product';

@Injectable
({
  providedIn: 'root'
})

export class ProductService 
{
  // Node/Express API
  private serverUrl = environment.serverUrl

  // Http Header
  optionRequete = {
    headers: new HttpHeaders
    ({            
      'Content-Type': 'application/json'
    })/*, responseType: 'text' as 'json'*/
  };
  
  configUrl = "assets/mock/product.json"

  constructor(private httpClient: HttpClient) 
  {}

  // Create Product
  createProduct(name: string, price: number, link: string, currency: string, id_user: number): Observable<any> 
  {
    return this.httpClient.post(`${this.serverUrl}/product/create`, {name: name, price: price, link: link, currency: currency, id_user: id_user}).pipe
    (
      catchError(this.handleError)
    );
  }

  // Retrieve product info
  getProductInfo(id: any): Observable<any>
  {
    return this.httpClient.get<Product[]>(`${this.serverUrl}/product/${id}`, this.optionRequete).pipe
    (
      map((res: any) => 
      {
        return res || {}
      }),
      catchError(this.handleError)
    );
  }

  // Update a Product with productId
  updateProduct(id: any, data: any): Observable<any>
  {
    return this.httpClient.put(`${this.serverUrl}/product/${id}`, data, this.optionRequete).pipe
    (
      catchError(this.handleError)
    );
  }

  // Delete a Product with productId
  deleteProduct(id: any): Observable<any>
  {
    return this.httpClient.delete(`${this.serverUrl}/product/${id}`, this.optionRequete).pipe
    (
      catchError(this.handleError)
    );
  }

  // Retrieve all products
  getProducts()
  {
    return this.httpClient.get<Product[]>(this.configUrl)
  }

  // Delete all Products with userId
  deleteProducts(id_user: any): Observable<any>
  {
    return this.httpClient.delete(`${this.serverUrl}/product/${id_user}`, this.optionRequete).pipe
    (
      catchError(this.handleError)
    ); 
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
