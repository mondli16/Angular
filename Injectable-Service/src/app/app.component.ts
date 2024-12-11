//Creating an injection service

// import { Component, inject } from '@angular/core';
// import { CarService } from './car.service';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: '<p> {{ carService.getCars() }} </p>',
// })
// export class AppComponent {
//   carService = inject(CarService);
// }

// Inject - based dependency injection

//import { Component, inject } from '@angular/core';
//import { CarService } from './car.service';

// @Component({
//   selector: 'app-root',
//   template: ` <p> Car Listing: {{ display }}</p>`,
//   standalone: true,
// })
// export class AppComponent {
//   display = '';
//   carService = inject(CarService);

//   constructor() {
//     this.display = this.carService.getCars().join(' ⭐️ ');
//   }
// }

//Constructor-based dependency injection

import { Component, inject } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
  standalone: true,
})
export class AppComponent {
  display = '';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ 00 ');
  }}
