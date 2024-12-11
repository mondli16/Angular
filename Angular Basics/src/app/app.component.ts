import { Component } from '@angular/core';
import { UserComponent } from './Components/user.components';
import { UseComponent } from './Components/user.component';
import { CommentsComponent } from './Components/comments.component';
import { ItemComponent } from './Components/item.component';
import { RouterOutlet } from '@angular/router';

// @Component({
//   selector:'app-user',
//   template: `Username:{{username}}`,
//   standalone:true,
// })
// export class Username {
//   username = 'Mondli';
// }

// @Component({
//   selector: 'app-age',
//   template: `Age:{{age}}`,
//   standalone: true,
// })
// export class Age {
//   age = '23';
// }


// @Component({
//   selector: 'app-root',
//   template: `<section><app-user/></section>
//   <section><app-age/></section>`,
//   standalone: true,
//   imports: [Username, Age],
// })
// export class AppComponent { }

// @Component({
//   selector: 'app-root',
//   template: `
//     @if(isLoggedIn){
//       <p>Welcome back, Friend</p>
//     }
//     @else{
//       <span>Bye</span>
//     }
//   `,
//   standalone: true,
// })
// export class AppComponent {
//   // add the boolean property here
//   isLoggedIn = false;
// }


// @Component({
//   selector: 'app-root',
//   template: `@for (name of users; track name.id){<ul><li>{{name.name}}</li></ul>}`,
//   standalone: true,
// })
// export class AppComponent {
//   users = [{ id: 0, name: 'Sarah' }, { id: 1, name: 'Amy' }, { id: 2, name: 'Rachel' }, { id: 3, name: 'Jessica' }, { id: 4, name: 'Poornima' }]
//  }

//This is binding

// @Component({
//   selector: 'app-root',
//   styleUrls: ['app.component.css'],
//   template: `
//     <div [contentEditable]="isEditable"></div>
//   `,
//   standalone: true,
// })
// export class AppComponent {
//   isEditable = true;
// }



//Event Handler


// @Component({
//   selector: 'app-root',
//   template: `
//     <section
//       (mouseover) = "onMouseOver()">{{message}}
//     </section>
//   `,
//   standalone: true,
// })
// export class AppComponent {
//   message = 'Magic';

//   onMouseOver() {
//     this.message = 'Way to go 🚀';
//   }
// }

// Component Communication with @Input

// @Component({
//   selector: 'app-root',
//   template: `<app-user username="Mondli"/>`,
//   imports:[UserComponent],
//   standalone:true,
// })

// export class AppComponent {}

//Component Communication with @Output

// @Component({
//   selector: 'app-root',
//   template: `
//     <app-child (addItemEvent)="addItem($event) remove" />
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   standalone: true,
//   imports: [ItemComponent],
// })
// export class AppComponent {
//   items = new Array();

//   addItem(item: string) {
//     this.items.push(item);
//   }
//   removeItem(item:string){
//     this.items.pop();
//   }
// }


// ===Deferrable Views

// @Component({
//   selector: 'app-root',
//   template: `
//     <div>
//       <h1>How I feel about Angular</h1>
//       <article>
//   <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
//   <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
//   <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
//   <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
//   <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
//   <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted.</p>
// </article>
//       @defer {
//         <comments />
//         } @placeholder {
//         <p>Future comments</p>
//       } @loading (minimum 2s) {
//         <p>Loading comments...</p>
//       }
 //    </div>
//   `,
//   standalone: true,
//   imports: [CommentsComponent],
// })
// export class AppComponent { }


//Optimizing images
 @Component({
   selector: 'app-root',
   template: `<app-user/>
   `,
   standalone: true,
   imports: [UseComponent],
 })
 export class AppComponent {}


