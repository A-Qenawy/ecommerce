import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    debugger
     this.service.getById(this.id).subscribe(p => {
      this.product = p;
      console.log(this.product);


    });



  }
  ngOnChanges() {
    this.service.getById(this.id).subscribe(p => {
      this.product = p;
      console.log(this.product);
    });

  }
  Close() {
    this.onProductDelete.emit(false);
  }
  Delete() {
    debugger

    this.service.deleteProduct(this.id);
    this.onProductDelete.emit(true);

  }
}
