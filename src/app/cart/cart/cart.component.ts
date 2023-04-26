import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProduct: any[] = []
  checkOn: boolean = false
  buyProduct: any[] = []
  showNumber: number = 1
  items: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartServiceService,
  ) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    console.log(this.cartService.getProduct())
    this.cartProduct = this.cartService.getProduct()
    this.items = this.cartService.couponList
    console.log('this.items', this.items)
  }

  deleteAll(): void {
    this.cartProduct = []
    this.cartService.Info = []
  }

  selectAll(): void {
    this.checkOn = true
  }

  take($event: any, item: any) {
    // console.log($event, item)
    if ($event) {
      this.buy(item)
    }
  }

  buy(item: any): void {
    this.buyProduct.push(item)
  }

  showCart() {
    console.log(this.buyProduct)
  }


  add(item: any): void {
    item.productCount++
  }

  minus(item: any): void {
    if (item.productCount > 1) item.productCount--
  }

  goProduct(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
