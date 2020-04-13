import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() itemData: Item;

  constructor() { }

  ngOnInit(): void {
  }
  viewHandler(view) {
    console.log(view.value);
  }
  getDetail() {
    console.log("hello");
  }
}
