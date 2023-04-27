import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/interfaces/product';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartProduct: product[] = []     //商品頁加到購物車的所有商品
  buyProduct: product[] = []      //cart頁面加到結帳的商品
  settleProduct: product[] = []   //最後要結算的商品
  showNumber: number = 1
  items: any;
  checkAll: boolean = false;
  originalPrice: any;
  showPrice: any;
  product: any
  event:any

  form1 = new FormGroup({
    couponId: new FormControl('')
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
    console.log('this.cartService.Info', this.cartService.Info)
    // this.totalAmt = this.cartService.Info.reduce((total, { productPrice, productCount }) => {
    //   return total + productPrice * productCount
    // }, 0)
    this.originalPrice = this.cartService.Info.reduce((total, item) => {
      console.log('total', total)
      console.log('item', item)
      return total + item.productPrice * item.productCount
    }, 0)
    this.showPrice = this.originalPrice
    this.cartProduct.forEach(x => {
      this.form1.addControl('check' + x.productId, new FormControl(false));
    })
    console.log(this.form1.controls);
  }

  deleteAll(): void {
    this.cartProduct = []
    this.cartService.Info = []
  }

  selectAll(): void {
    this.cartProduct.forEach(x => {
      this.form1.get('check' + x.productId)?.setValue(true);
    })
  }


  buy(item: any): void {
    this.buyProduct.push(item)
  }

  take($event: any, item: any) {
    this.event = $event
    console.log($event)
    console.log($event, item)

    if (this.form1.get('check' + item.productId)?.value) {
      this.buy(item)
    } else {
      this.buyProduct = this.buyProduct.filter(x => x.productId !== item.productId);
    }

    this.cartService.setCheckOut(this.buyProduct)

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

  contentChange() {
    console.log(this.form1.value.couponId)
    this.showPrice = (this.originalPrice * this.form1.value.couponId.discount) - this.form1.value.couponId.priceOff
  }

  goCheckOut(): void {
    let checkList = []
    this.buyProduct.forEach(x => {
      const check = this.form1.get('check' + x.productId)?.value
      checkList.push(check)
    })
    if(checkList.length == 0){
      window.alert('未選取商品')
    }else{
      this.router.navigate(['../checkout'], { relativeTo: this.route });
    }


  }



}
