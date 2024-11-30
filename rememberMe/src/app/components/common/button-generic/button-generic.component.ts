import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  templateUrl: './button-generic.component.html',
  styleUrls: ['./button-generic.component.scss']
})
export class ButtonGenericComponent {

  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant: 'primary' | 'secondary' | 'danger' | 'success' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter<Event>();

  get buttonClasses(): string {
    const base =
      'relative inline-flex items-center justify-center rounded-full shadow-md font-medium focus:outline-none focus:ring-2 transition-all duration-200 ease-in-out';
    const variants = {
      primary:
        'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300 hover:shadow-lg',
      secondary:
        'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-300 hover:shadow-lg',
      danger:
        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300 hover:shadow-lg',
      success:
        'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300 hover:shadow-lg',
    };
    const sizes = {
      small: 'px-3 py-1 text-sm',
      medium: 'px-5 py-2 text-base',
      large: 'px-7 py-3 text-lg',
    };

    return `${base} ${variants[this.variant]} ${sizes[this.size]} ${
      this.disabled ? 'opacity-50 cursor-not-allowed' : ''
    }`;
  }

  handleClick(event: Event): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

}
