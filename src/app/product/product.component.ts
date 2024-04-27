import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ClaculService } from '../services/clacul.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
priceMax!:number
listProduct:Product[]=[]
alert !:number

constructor(private ps : ProductService,private cl:ClaculService){}

  ngOnInit(){
    this.listProduct=this.ps.listProduct
    this.alert=this.cl.stat(this.listProduct,'quantity',0)
  }

increment(i:number){
  console.log(i)
    this.listProduct[i].like++
}
buy(i:number){

  console.log(i)
    this.listProduct[i].quantity--
}
}
