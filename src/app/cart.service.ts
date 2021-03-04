import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CartService {
  items = [];
  category = '';
  addToCart(product): void {
    this.items.push(product);
  }

  getItems(): any {
    return this.items;
  }

  clearCart(): any {
    this.items = [];
    return this.items;
  }
  getShippingPrices(): any {
    return this.http.get('/assets/shipping.json');
  }
  categoryTechies(): void {
    this.category = 'technics';
  }
  categoryComp(): void {
    this.category = 'computer';
  }
  categoryWire(): void {
    this.category = 'wires';
  }
  categoryMusIn(): void {
    this.category = 'musical instrument';
  }
  categoryitems(): any {
    return this.category;
  }

  constructor(
    private http: HttpClient
    ) { }

}
