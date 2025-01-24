import { Component, output } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Módulo para funcionalidades de arrastrar y soltar (drag and drop)
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'; // Funciones y tipos del CDK para manejo de arrastre
import { Dialog } from '@angular/cdk/dialog'; // Módulo para abrir diálogos/modales
import { ToDo, Column } from '../../models/toDo.model'; // Importación de modelos de tareas y columnas
import { CommonModule } from '@angular/common'; // Módulo común que incluye funcionalidades básicas de Angular
import { FormsModule } from '@angular/forms'; // Módulo para trabajar con formularios en Angular
import {ToDoDialogComponent} from '../../components/to-do-dialog/to-do-dialog.component'; // Componente del diálogo para agregar tareas

@Component({
  selector: 'app-board', // Selector del componente para ser utilizado en otros templates
  standalone: true, // Es un componente independiente, no requiere estar en un módulo específico
  styles: [
    `
      /* Estilos personalizados para este componente */
      .task-card {
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        padding: 10px;
        border-radius: 8px;
        margin-top: 10px;
      }
    `
  ],
  imports: [DragDropModule, NavbarComponent, CommonModule, FormsModule], // Importación de módulos necesarios para este componente
  templateUrl: './board.component.html' // Template HTML asociado al componente
})
export class BoardComponent {

  // Definición de las columnas con sus tareas iniciales
  columns: Column[] = [
    {
      title: 'To Do', // Título de la columna
      todos: [        // Lista de tareas en la columna "To Do"
        { id: '1', title: 'Task 1' },
        { id: '2', title: 'Task 2' }
      ]
    },
    {
      title: 'Doing', // Título de la columna
      todos: [        // Lista de tareas en la columna "Doing"
        { id: '3', title: 'Task 3' }
      ]
    },
    {
      title: 'Done',  // Título de la columna
      todos: [        // Lista de tareas en la columna "Done"
        { id: '4', title: 'Task 4' }
      ]
    }
  ];

  constructor(
    private dialog: Dialog // Inyección del servicio Dialog para abrir el modal
  ){}

  // Título de la nueva columna, que se usará en el campo de entrada para agregar columnas
  newColumnTitle: string = '';

  // Método para agregar una nueva columna al tablero
  addColumn() {
    // Solo se agrega la columna si el campo no está vacío o lleno de espacios
    if (this.newColumnTitle.trim()) {
      this.columns.push({
        title: this.newColumnTitle,  // Se utiliza el valor del input para el título de la columna
        todos: [] // Se inicializa la columna con una lista vacía de tareas
      });
      this.newColumnTitle = ''; // Limpiar el campo de entrada después de agregar la columna
    }
  }

  // Método que maneja el evento de arrastre y soltado de tareas
  drop(event: CdkDragDrop<ToDo[]>) {
    // Si se suelta el ítem dentro de la misma columna
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex); // Cambiar el orden dentro de la misma lista
    } else {
      transferArrayItem(
        event.previousContainer.data,  // Lista de la que se tomó el ítem
        event.container.data,          // Lista en la que se suelta el ítem
        event.previousIndex,           // Índice original
        event.currentIndex             // Nuevo índice en la lista de destino
      );
    }
  }

  // Método para abrir un diálogo/modal cuando se quiere agregar una tarea
  openDialog(todo: ToDo) {
    const dialogRef = this.dialog.open(ToDoDialogComponent, { // Se abre el componente ToDoDialogComponent como un modal
      width: '400px',  // Ancho del modal
      maxWidth: '90vw',  // Limitar el ancho máximo al 90% de la ventana del navegador
      height: 'auto',  // La altura se ajusta automáticamente al contenido
      maxHeight: '90vh',  // Limitar la altura máxima al 90% de la ventana del navegador
      panelClass: 'custom-dialog-container',  // Clase CSS personalizada para aplicar más estilos si se requiere
      autoFocus: false,  // Evita que un campo dentro del modal se enfoque automáticamente al abrirlo

      data:{
        todo: todo, 
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
  
}
