import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrls: ['./button.css']
})
export class DynamicButtonComponent {
  @Input() label: string = 'Buy';
  @Input() btnColorClass: string = 'btn-blue';
  @Input() customStyle: { [key: string]: string } = {};
  @Input() isDisabled: boolean = false;

  @Output() btnClick = new EventEmitter<void>();

  onClickButton() {
    this.btnClick.emit();
  }
}
