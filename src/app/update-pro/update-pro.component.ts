import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsumerProductService } from '../services/consumer-product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-pro',
  templateUrl: './update-pro.component.html',
  styleUrls: ['./update-pro.component.css']
})
export class UpdateProComponent {
  product!:Product
  id!:number
  constructor(private ps:ProductService,private rt:Router,
    private consp:ConsumerProductService,private Act:ActivatedRoute){}
  loginForm= new FormGroup({
    id: new FormControl('',Validators.required),
    title: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    like: new FormControl('',Validators.required),

  })

  ngOnInit(){
    this.id=this.Act.snapshot.params['id']
    this.consp.getProductById(this.id).subscribe(
      (data)=> {
        this.product=data,
        this.loginForm.patchValue(this.product as any)
      }
    )
  }

  update(){
    this.consp.updateProduct(this.loginForm.value as any , this.id).subscribe(
      ()=>this.rt.navigateByUrl('/product')
    )
  }
}
