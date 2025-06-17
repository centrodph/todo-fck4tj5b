import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-form',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="text" [(ngModel)]="description" name="description" />
      <button type="submit">Add</button>
    </form>
  `,
})
export class TodoFormComponent {
  description = '';
  @Output() add = new EventEmitter<string>();

  onSubmit() {
    if (this.description.trim()) {
      this.add.emit(this.description.trim());
      this.description = '';
    }
  }
}
