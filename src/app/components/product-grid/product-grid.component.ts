import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  product: Product[] = [];
  productId: number;
  currentItem = "televesion";
  showDetails: boolean = false;
  showEdit: boolean = false;
  showDelete: boolean = false;
  showAdd: boolean = false;
  isAvailable: boolean[] = [];


  constructor(private service: ProductService, private route: Router) { }

  ngOnInit(): void {
      this.service.getAll().subscribe(p=>{
      this.product = p;
    });
   

  }
  Add() {
    this.showAdd = true;
    this.route.navigateByUrl("/product/add");

  }
  Details(id: number) {
    // this.showEdit = this.showAdd = this.showDelete = false;
    this.productId = id;
    this.route.navigateByUrl("/product/" + id)
    console.log("detailsMethod:", this.productId);
    this.showDetails = true;
    // this.showDetails = true;
  }
  Update(id: number) {
    
    this.productId = id;
    this.showEdit = true;

  }
  Delete(id: number) {

    this.productId = id;
    this.route.navigateByUrl('/product/delete/' + id);
    this.showDelete = true;

  }




}
