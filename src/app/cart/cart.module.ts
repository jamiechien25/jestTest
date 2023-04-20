import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';

import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCheckboxModule
  ]
})
export class CartModule { }
