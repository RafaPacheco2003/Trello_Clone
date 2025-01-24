import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faRocket, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock, faComment, faPaperclip, faCalendarAlt, faFlag } from '@fortawesome/free-solid-svg-icons';
import {BtnComponent} from '../../components/btn/btn.component'
import { ToDo } from '../../models/toDo.model';

interface InputData{
  todo: ToDo;
}
interface OutputData{
  rta: boolean;
}
@Component({
  selector: 'app-to-do-dialog',
  standalone: true, // Ya que estás usando standalone
  imports: [FontAwesomeModule, BtnComponent], // Importar FontAwesomeModule directamente aquí
  templateUrl: './to-do-dialog.component.html'
})
export class ToDoDialogComponent {

  // Definición de los iconos para el uso en el template
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  faComment = faComment;
  faPaperclip = faPaperclip;
  faCalendarAlt = faCalendarAlt;
  faFlag = faFlag;
  faRocket = faRocket;

  todo!: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) public data: InputData
  ) {
    this.todo = data.todo;
  }
  
  close() {
    
  }

  // Función para cerrar el diálogo con una respuesta
  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
