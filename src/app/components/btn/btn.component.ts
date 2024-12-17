import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html'
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color: 'primary' | 'success' = 'primary';  // Especificar los posibles valores de color

  get colors() {
    console.log('Color actual:', this.color);  // Esto te ayudará a verificar qué valor está recibiendo
    return {
      'bg-success-500': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      
      'bg-primary-500': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
    };
  }
  
}
