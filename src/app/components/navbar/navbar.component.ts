import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule, CdkConnectedOverlay } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule,BtnComponent, OverlayModule, CdkConnectedOverlay],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
  isOpenBody= false;

  email = 'rodrigo@gmail.com'; // Define el correo aquí
  userName = 'Bonnie Green';   // Define el nombre de usuario aquí

  // Define los iconos que quieres utilizar
  faBell = faBell;
  faInfoCircle = faInfoCircle; // Si también quieres usar este icono
}
