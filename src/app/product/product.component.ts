import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
priceMax!:number
listProduct:Product[]=[]

increment(i:number){
  console.log(i)
    this.listProduct[i].like++
}
buy(i:number){

  console.log(i)
    this.listProduct[i].quantity--
}
}
