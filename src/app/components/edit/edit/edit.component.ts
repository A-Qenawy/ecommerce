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
    debugger
    this.service.getById(this.id).subscribe(p => {
      this.product = p;
    });

  }
  ngOnChanges() {
    debugger
    this.service.getById(this.id).subscribe(p => {
      this.product = p;
    });
    //debugger
    // let tempProduct = this.service.getById(this.id);
    // this.product.id = tempProduct.id;
    // this.product.title = tempProduct.title;
    // this.product.description = tempProduct.description;
    // this.product.photo = tempProduct.photo;

    //   this.service.getById(this.id).subscribe(p=>{
    //     this.service.EditProduct(this.product);
    //     this.product = p;
    //   })

    // console.log("Ng",this.product);

  }

  Edit() {
    debugger
    this.service.EditProduct(this.product).subscribe(data => {
      this.onProductEdit.emit(true);
      console.log(data);

    });
  }

  Close() {
    this.onProductEdit.emit(false);
  }

}
