import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  item: any;
  constructor(private router: Router) {

    if (typeof this.router.getCurrentNavigation().extras.state.Item != 'undefined'
        && this.router.getCurrentNavigation().extras.state.Item) {
      this.item = this.router.getCurrentNavigation().extras.state.Item;
    }
  }
  ngOnInit(): void {
    // debugger;
  }

}
