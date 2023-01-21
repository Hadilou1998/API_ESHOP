import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable
({
  providedIn: 'root'
})

export class AddtocartService 
{
  // subject = new Subject;
  items: Product[] = [];
  constructor(private httpClient: HttpClient) { }

  addToCart(product: Product)
  {
    this.items.push(product);
  }

  getItems()
  {
    return this.items;
  }

  itemsCount()
  {
    return this.items.length;
  }

  clearCart()
  {
    this.items = [];
    return this.items;
  }

  /*sendMsg(product: unknown)
  {
    this.subject.next(product);
  }

  getMsg()
  {
    return this.subject.asObservable();
  }*/
}
