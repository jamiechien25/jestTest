import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productName: string = '商品A'
  productCount: number = 1
  productPrice: number = 1234
  productInfo?: product[]


  form1 = new FormGroup({
    productName: new FormControl(),
    productId: new FormControl(),
    productCount: new FormControl(),
    productPrice: new FormControl(1234),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {


    this.productInfo = [
      {
        productId: '01',
        productName: '商品A',
        productPrice: 123,
        productCount: 1,
        productDesc: '商品A細節',
      },
      {
        productId: '02',
        productName: '商品B',
        productPrice: 234,
        productCount: 1,
        productDesc: '商品B細節',
      },
      {
        productId: '03',
        productName: '商品C',
        productPrice: 124,
        productCount: 1,
        productDesc: '商品C細節',
      },
      {
        productId: '04',
        productName: '商品D',
        productPrice: 125,
        productCount: 1,
        productDesc: '商品D細節',
      },
      {
        productId: '05',
        productName: '商品E',
        productPrice: 128,
        productCount: 1,
        productDesc: '商品E細節',
      },
      {
        productId: '06',
        productName: '商品F',
        productPrice: 1111,
        productCount: 1,
        productDesc: '商品F細節',
      },
      {
        productId: '07',
        productName: '商品G',
        productPrice: 12312,
        productCount: 1,
        productDesc: '商品G細節',
      },
      {
        productId: '08',
        productName: '商品H',
        productPrice: 1233,
        productCount: 1,
        productDesc: '商品H細節',
      },
    ] as product[]
  }

  addcart(item: any): void {
    const abcArray = {
      productName: item.productName,
      productCount: item.productCount,
      productPrice: item.productPrice,
      productId: item.productId
    }
    console.log(abcArray)
    // console.log(item)
    // console.log(this.productCount)
  }

  add(item: any): void {
    item.productCount++
  }

  minus(item: any): void {
    if (item.productCount > 1) item.productCount--
  }

  getcoupon(): void {
    window.alert('成功領取!')
  }

  goCart():void{
    this.router.navigate(['cart'], { relativeTo: this.route });
  }

}
