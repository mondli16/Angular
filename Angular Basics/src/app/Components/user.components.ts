import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>The user's name is <span> {{username}}</span></p>
  `,
  standalone: true,
})
export class UserComponent {
  @Input() username = '';
 }
