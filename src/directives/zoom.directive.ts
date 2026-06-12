import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appZoom]',
  standalone: true
})
export class ZoomDirective {
  private isZoomed = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'zoom-in');
  }

  @HostListener('click') onClick() {
    this.isZoomed = !this.isZoomed;
    if (this.isZoomed) {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.5)');
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '10');
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
      this.renderer.setStyle(this.el.nativeElement, 'z-index', '1');
    }
  }
}
