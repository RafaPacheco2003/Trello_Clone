import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faAngleUp, faAngleDown,faWaveSquare, faClock, faHeart, faBorderAll, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common'; 
import {DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [FontAwesomeModule, NavbarComponent,CdkAccordionModule, CommonModule],
  templateUrl: './boards.component.html',
  styleUrl: './boards.component.scss'
})
export class BoardsComponent {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUser = faUser;
  faGear = faGear;


  items = [
    {
      label: 'Item 1',
      items:[
        {
          label: 'sub Item 1.1'
        },
        {
          label: 'sub Item 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items:[
        {
          label: 'sub Item 2.1'
        },
      ]
    },
    {
      label: 'Item 3',
      items:[
        {
          label: 'sub Item 3.1'
        },
        {
          label: 'sub Item 3.2'
        },
        {
          label: 'sub Item 3.3'
        }
      ]
    }
  ];



}
