import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import {CartService} from "../cart.service";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit{
  products = products;

  category = '';
  share(): void {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');
  }
  constructor(private cartservice: CartService ) { }
  ngOnInit(): void {
    this.category = this.cartservice.categoryitems();
  }


}
