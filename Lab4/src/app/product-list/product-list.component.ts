import { Component, Input } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products]
  @Input() categoryName: string | undefined;
  remove(id:number){
    this.products = this.products.filter((x) => x.id !== id);
  }
  share(product: Product) {
    window.alert('The product has been shared!');
    window.open(`https://api.whatsapp.com/send?phone=77767283492&text=${product.link}`);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/