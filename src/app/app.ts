import { Component } from '@angular/core';
import { SliderComponent } from '../Components/slider/slider';
import { ProductList } from '../Components/product-list/product-list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ProductList],
  template: `<app-product-list></app-product-list>`,
  
})
export class AppComponent {
  title = 'demo';
}
