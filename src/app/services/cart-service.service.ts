import { product } from '../interfaces/product';
import { coupon } from './../interfaces/coupon';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  Info: any[] = [];
  product: any;
  CheckOutList : product[] = []

  couponList: any[] = [
    {
      productId: 'productNo1',
      couponId: '1',
      couponType: '1',
      couponDesc: '9折卷',
      discount: 0.9,       //折數 ex: 0.9 0.8
      priceOff: 0,       //單一品項折價 ex: 10,20,30
      deliveryFree: true,
      used: false
    },
    {
      productId: 'productNo2',
      couponId: '2',
      couponType: '2',
      couponDesc: '30現金折抵卷',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 30,       //單一品項折價 ex: 10,20,30
      deliveryFree: true,
      used: false
    },
    {
      productId: 'productNo3',
      couponId: '3',
      couponType: '2',
      couponDesc: '60現金折抵卷',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 60,       //單一品項折價 ex: 10,20,30
      deliveryFree: false,
      used: false

    },
    {
      productId: 'productNo4',
      couponId: '4',
      couponDesc: '100現金折抵卷',
      couponType: '2',
      discount: 1,       //折數 ex: 0.9 0.8
      priceOff: 100,       //單一品項折價 ex: 10,20,30
      deliveryFree: true,
      used: false
    }
  ]

  constructor() { }

  setProduct(product: any) {
    this.Info.push(product)
  }

  getProduct() {
    return this.Info
  }


  setCheckOut(product: any) {
    this.CheckOutList = product
  }

  getCheckOut() {
    return this.CheckOutList
  }


}
