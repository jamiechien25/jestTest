import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  Info: any[] = []
  product: any

  constructor() { }

  setProduct(product:any) {
    this.Info.push(product)
  }

  getProduct() {
    console.log(this.Info)
    return this.Info
  }


}
