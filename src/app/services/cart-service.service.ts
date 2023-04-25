import { coupon } from './../interfaces/coupon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  Info: any[] = [];
  product: any;

  couponList: any[] = [
    {
      productId: 'productNo1',
      couponId: '1',
      couponType: '1',
      discount: 0.9,       //折數 ex: 0.9 0.8
      priceOff: 0,       //單一品項折價 ex: 10,20,30
      deliveryFree: true
    },
    {
      productId: 'productNo2',
      couponId: '2',
      couponType: '2',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 30,       //單一品項折價 ex: 10,20,30
      deliveryFree: true
    },
    {
      productId: 'productNo3',
      couponId: '3',
      couponType: '2',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 60,       //單一品項折價 ex: 10,20,30
      deliveryFree: false

    },
    {
      productId: 'productNo4',
      couponId: '4',
      couponType: '2',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 100,       //單一品項折價 ex: 10,20,30
      deliveryFree: true
    }
  ]

  constructor() { }

  setProduct(product: any) {
    this.Info.push(product)
    console.log(this.Info)
  }

  getProduct() {
    console.log(this.Info)
    return this.Info
  }



}
