import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form.component';

export interface Todo {
  id: number;
  description: string;
}

const TODOS: Todo[] = [
  { id: 1, description: 'Buy milk' },
  { id: 2, description: 'Walk the dog' },
  { id: 3, description: 'Write code' },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoFormComponent],
  templateUrl: './app.component.html',
})
export class App {
  todos = [...TODOS];

  addTodo(description: string) {
    const id = this.todos.length + 1;
    this.todos.push({ id, description });
  }
}

bootstrapApplication(App);
