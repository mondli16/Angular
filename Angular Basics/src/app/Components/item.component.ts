import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
  <div>
    <div>
      <button class="btn" (click)="addItem()">Add Item</button>
    </div>
    <div>
    <button class="btn" (click)="removeItem()">Remove Item</button>
    </div>
  </div>


  `,
  standalone: true,
})
export class ItemComponent {
  addItem() {
    this.addItemEvent.emit('🐢');
  }
  removeItem(){
    this.addItemEvent.emit('');
  }
  @Output() addItemEvent = new EventEmitter<string>();
}
