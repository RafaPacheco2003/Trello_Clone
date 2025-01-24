import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {DialogModule} from '@angular/cdk/dialog'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DialogModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'trello-clone';
}
