import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product!:Product
  constructor(private ps:ProductService,private rt:Router){}
  loginForm= new FormGroup({
    id: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    like: new FormControl('',Validators.required),

  })

  add(){

    this.ps.addProduct(this.loginForm.value as any)
    this.rt.navigateByUrl('/product')
  }
}
