import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  @Input() id: number;
  @Input() item: string;
  @Output() onProductDetailsClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private service: ProductService, private ac: ActivatedRoute) { }

  ngOnInit(): void {
    debugger

    this.service.getById(this.id).subscribe(p => {
      this.product = p;
      console.log("idfromparent", this.id);
      console.log(this.product);



    })



  }

  ngOnChanges() {
    debugger

    this.service.getById(this.id).subscribe(p => {
      this.product = p;
    })

    console.log(this.product);
    
  }

  Close() {
    this.onProductDetailsClose.emit(false);
  }


}
