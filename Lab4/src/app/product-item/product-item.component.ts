import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product,products } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() remove = new EventEmitter();

  Remove() {
    this.remove.emit(this.product?.id);
  }
  like() {
    if(this.product){
      this.product.likes += 1;
    }
  }
  share(product: Product) {
    window.alert('The product has been shared!');
    window.open(`https://api.whatsapp.com/send?phone=77767283492&text=${product.link}`);
  }
}
