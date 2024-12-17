import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OverlayModule, CdkConnectedOverlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, CdkConnectedOverlay],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false;
  isOpenBody= false;

  email = 'rodrigo@gmail.com'; // Define el correo aquí
  userName = 'Bonnie Green';   // Define el nombre de usuario aquí
}
