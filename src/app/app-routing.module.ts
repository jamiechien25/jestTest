import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product/product.component';

const routes: Routes = [

  {
    path: '',
    loadChildren:() =>import('./product/product.module').then(m=>m.ProductModule)  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
