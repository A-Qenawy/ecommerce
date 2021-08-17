import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  product: Product = new Product();
  @Output() onProductAdd: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private service:ProductService) { }

  ngOnInit(): void {
  }
  Add() {
    this.service.AddProduct(this.product);
    this.onProductAdd.emit(true);
  }

  Close() {
    this.onProductAdd.emit(false);
  }

}
