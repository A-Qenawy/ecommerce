import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  product:Product;
  @Input() id: number;
  @Output() onProductDetailsClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private service:ProductService) { }


  ngOnInit(): void {

  }
  ngOnChanges() {
  }

}
