import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/products.data';
import { ReadMorePipe } from '../../pipes/read-more.pipe';
import { ZoomDirective } from '../../directives/zoom.directive';
import { DynamicButtonComponent } from '../button/button';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ReadMorePipe, ZoomDirective, DynamicButtonComponent],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() quantityChanged = new EventEmitter<void>();
  @Output() productPurchased = new EventEmitter<Product>();

  showFullDescription = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
    this.cdr.detectChanges();
  }

  increase() {
    if (this.product.quantitySelected < this.product.stock) {
      this.product.quantitySelected++;
      this.quantityChanged.emit();
      this.cdr.detectChanges();
    }
  }

  decrease() {
    if (this.product.quantitySelected > 0) {
      this.product.quantitySelected--;
      this.quantityChanged.emit();
      this.cdr.detectChanges();
    }
  }

  onBuy() {
    if (this.product.quantitySelected > 0) {
      this.productPurchased.emit(this.product);
    }
  }
}
