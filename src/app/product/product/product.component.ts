import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  title: string = '商品A'
  productCount: number = 1

  constructor() { }

  addcart(): void {

  }

  add(): void {
    this.productCount++
  }

  minus(): void {
    if (this.productCount > 1) this.productCount--
  }

  getcoupon(): void {

  }

}
