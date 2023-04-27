import { Component } from '@angular/core';
import { product } from 'src/app/interfaces/product';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  checkOutList : product[]=[]

  constructor(
    private cartService: CartServiceService,
  ) { }

  ngOnInit(): void {
    this.checkOutList = this.cartService.getCheckOut()
  }

}
