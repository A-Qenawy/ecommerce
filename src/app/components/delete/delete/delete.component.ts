import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  product: Product;
  @Input() id: number;
  @Output() onProductDelete: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private service: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getById(this.id).subscribe(p => {
      this.product = p;
    })

    console.log(this.product);
}
  
  ngOnChanges() {
    this.service.getById(this.id).subscribe(p => {
      this.product = p;
    })
    console.log(this.product);
      console.log(this.product);
    });

  }
  Close() {
    this.onProductDelete.emit(false);
  }
  Delete() {
    debugger
      this.service.deleteProduct(this.id).subscribe(data=>{
        console.log("success");
        
    
    })
    this.onProductDelete.emit(true);


  }
}
