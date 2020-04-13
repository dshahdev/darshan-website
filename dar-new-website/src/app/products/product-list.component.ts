import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Observable, forkJoin } from 'rxjs';
import { Items } from '../model/items.model';
import { Item } from '../model/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items: Array<Item>;
  constructor(private productService: ProductService,
              private route: Router) { }

  ngOnInit(): void {
    this.getMultipleData().subscribe((responsList) => {
      this.items = Items.fillForm(responsList[0].allProducts);
      this.items.forEach(e => {
        e.image_path = responsList[1].data[e.image_number].url;
      });
    
    })
  }

  //since we r dealing with tro types of data, coming from the serve
  // we can only proced when we get both data

  public getMultipleData(): Observable<any[]> {
    let response1 = this.productService.getData();
    let response2 = this.productService.getImageData();

    return forkJoin(response1, response2);
  }

  
}
