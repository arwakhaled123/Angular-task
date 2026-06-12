import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModel } from '../../models/slider.model';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  sliderData = new SliderModel();
  currentIndex: number = 0;
  private intervalId: any = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  next(): void {
    if (this.currentIndex < this.sliderData.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.cdr.detectChanges();
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.sliderData.images.length - 1;
    }
    this.cdr.detectChanges();
  }

  display(): void {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.next();
      }, 1000);
    }
  }

  stop(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
