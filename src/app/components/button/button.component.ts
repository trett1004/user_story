import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonText: string = 'Button Text';
  @Input() className: string = 'btn btn-primary';
  @Output() buttonClick = new EventEmitter<void>();
  @Input() disabled: boolean = false;
  onClick() {
    this.buttonClick.emit();
  }
}
