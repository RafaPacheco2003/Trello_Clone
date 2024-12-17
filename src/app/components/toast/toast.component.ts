import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnChanges {

  @Input() message: string = '';  // Mensaje para el Toast
  @Input() show: boolean = false; // Controlar la visibilidad del Toast

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes detected:', changes); // Agregar este log para verificar los cambios
    if (changes['show'] && this.show) {
      this.hideToast();
    }
  }

  hideToast() {
    setTimeout(() => {
      this.show = false; // Oculta el Toast después de 3 segundos
    }, 3000);
  }
}
