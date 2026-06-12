import { Component } from '@angular/core';
import { SliderComponent } from '../Components/slider/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SliderComponent],
  template: `<app-slider></app-slider>`,
  
})
export class AppComponent {
  title = 'demo';
}
