import { Component } from '@angular/core';
import { BtnComponent } from '../../components/btn/btn.component';
import { ToastComponent } from '../../components/toast/toast.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent, ToastComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showToast: boolean = false;
  toastMessage: string = '';

  // Método que se invoca al hacer clic en el botón "Log In"
  onLoginClick() {
    this.toastMessage = 'Hola xd'; // Mensaje a mostrar en el toast
    this.showToast = true; // Mostrar el toast
    console.log('Login successful');
  }
}
