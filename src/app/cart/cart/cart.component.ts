import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProduct: any[] = []     //商品頁加到購物車的所有商品
  buyProduct: any[] = []      //cart頁面加到結帳的商品
  settleProduct: any[] = []   //最後要結算的商品
  showNumber: number = 1
  items: any;
  checkAll: boolean = false;
  totalAmt: any;

  form1 = new FormGroup({
    check: new FormControl(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartServiceService,
  ) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    this.cartProduct = this.cartService.getProduct()
    this.items = this.cartService.couponList
    console.log('this.items', this.items)
    this.totalAmt = this.cartService.Info.reduce((total, { productPrice, productCount }) => {
      return total + productPrice * productCount
    }, 0)
  }

  deleteAll(): void {
    this.cartProduct = []
    this.cartService.Info = []
  }

  selectAll(): void {
    this.form1.get('check')?.setValue(true)
    if (this.form1.get('check')?.value == true) {
      this.checkAll = true
    }
  }

  take($event: any, item: any) {
    console.log(this.form1.get('check')?.value)
    console.log($event, item)
    if ($event) {
      this.buy(item)
    }
  }

  buy(item: any): void {
    this.buyProduct.push(item)
  }

  showCart() {
    if (this.checkAll) {
      this.settleProduct = this.cartProduct
    } else {
      this.settleProduct = this.buyProduct
    }
    console.log(this.settleProduct)
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
