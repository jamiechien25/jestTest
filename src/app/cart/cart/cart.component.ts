import { Component } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProduct : any[] =[]


  constructor(
    private cartService : CartServiceService,
  ) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    console.log(this.cartService.getProduct())
    this.cartProduct = this.cartService.getProduct()
  }

}
