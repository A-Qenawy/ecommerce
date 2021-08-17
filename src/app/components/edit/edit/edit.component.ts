import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Product = new Product();
  @Input() id: number;
  @Output() onProductEdit: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private service: ProductService, private ac: ActivatedRoute) { }

  ngOnInit(): void {


    this.ac.params.subscribe(a => {
      this.service.getById(this.id).subscribe(p => {
        this.product = p;
        console.log("Init", this.product);

      })

    });
  }
  ngOnChanges() {
    this.ac.params.subscribe(a => {
      this.service.getById(this.id).subscribe(p => {
        this.product = p;
        console.log("Init", this.product);
      })
    })
  }

  Edit() {
    debugger
    this.service.EditProduct(this.product);
    this.onProductEdit.emit(true);
    console.log(this.product);
    
  }

  Close() {
    this.onProductEdit.emit(false);
  }

}
