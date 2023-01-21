import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { AddtocartService } from 'src/app/service/addtocart.service';
import { ProductService } from 'src/app/service/product-service.service';

@Component
({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit 
{
  // id: any;
  @Input() item: Product = {id: 0, name: '', price: 0, link: '', currency: '', id_user: 0}

  constructor(private productService: ProductService, private cartService: AddtocartService, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {}

  addToCart(item: Product)
  {
    this.cartService.addToCart(item);
    console.log(this.item);
    // this.msg.sendMsg(this.item);
  }
}
