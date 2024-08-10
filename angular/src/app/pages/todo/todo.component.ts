import { Component, EventEmitter, Input, LOCALE_ID, Output } from '@angular/core';
import { NTodo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input({ required: true}) todoData!: NTodo.TodoData;
}
