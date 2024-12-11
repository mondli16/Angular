//Create pipe

// import { Component } from '@angular/core';
// import { LowerCasePipe } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   template: `
//     {{ username | lowercase }}
//   `,
//   standalone: true,
//   imports: [LowerCasePipe],
// })
// export class AppComponent {
//   username = 'yOunGTECh';
// }

//Formatting data with pipes

// import { Component } from '@angular/core';
// import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   template: `
//     <ul>
//       <li>Number with "decimal" {{ num | number:"3.2-2" }}</li>
//       <li>Date with "date" {{ birthday| date:'medium' }}</li>
//       <li>Currency with "currency" {{ cost| currency }}</li>
//     </ul>
//   `,
//   standalone: true,
//   imports: [DecimalPipe, DatePipe, CurrencyPipe],
// })
// export class AppComponent {
//   num = 103.1234;
//   birthday = new Date(2023, 3, 2);
//   cost = 4560.34;
// }

//Creating a custom pipe
import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: `
    Reverse Machine: {{ word | reverse }}
  `,
  standalone: true,
  imports: [ReversePipe],
})
export class AppComponent {
  word = 'You are a champion';
}
