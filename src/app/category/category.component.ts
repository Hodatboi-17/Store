import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  category = '';
  categoryTechies(): void {
    this.cartservice.categoryTechies();
  }
  categoryComp(): void {
    this.cartservice.categoryComp();
  }
  categoryWire(): void {
    this.cartservice.categoryWire();
  }
  categoryMusIn(): void {
    this.cartservice.categoryMusIn();
  }

  constructor(private cartservice: CartService ) { }

  ngOnInit(): void {
  }

}
