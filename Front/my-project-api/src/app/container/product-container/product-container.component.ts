import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit 
{
  products: Product[] = [];

  constructor(private productService: ProductService) 
  { }

  ngOnInit() 
  {
    this.loadProducts();  
  }

  loadProducts()
  {
    this.productService.getProducts().subscribe(data => 
    {
      this.products = data
    });
  }
}
