import { Component} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input() product;

  likeButtonClick(): void {
    this.product.like++;
  }
  dislikeButtonClick(): void{
    this.product.like--;
  }

}

