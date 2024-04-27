import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ResidenceComponent } from './residence/residence.component';
import { ApartementComponent } from './apartement/apartement.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProComponent } from './update-pro/update-pro.component';

const routes: Routes = [
  //route par defaut
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'product', component:ProductComponent},
  {path:'residence', component:ResidenceComponent},
  {path:'login', component:ReactiveFormComponent},
  {path:'AddP', component:AddProductComponent},
  {path:'detailP/:id', component:DetailProductComponent},
  {path:'UpdateP/:id', component:UpdateProComponent},
  {path:'apartement/:id', component:ApartementComponent},
  //route not found
  {path:'**',component:NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
