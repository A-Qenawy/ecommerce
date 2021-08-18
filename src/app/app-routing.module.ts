import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add/add.component';
import { DeleteComponent } from './components/delete/delete/delete.component';
import { ProductDetailsComponent } from './components/details/product-details/product-details.component';
import { EditComponent } from './components/edit/edit/edit.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';

const routes: Routes = [
  {path:'',component:ProductGridComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'product/edit/:Id',component:EditComponent},
  {path:'product/delete/:Id',component:DeleteComponent},
  {path:'product/Add',component:AddComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
