import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTheme]',
  standalone: true
})
export class ThemeDirective implements OnChanges {
  @Input('appTheme') mode: 'light' | 'dark' = 'light';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.mode === 'dark') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#1e1e1e');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#ffffff');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffffff');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#000000');
    }
  }
}
