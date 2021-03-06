import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{ pageTitle }}</a>
    <ul class="nav nav-pills">
      <li><a [routerLink]="['/welcome']"  routerLinkActive='active' class="nav-link">Home</a></li>
      <li><a [routerLink]="['/products']" routerLinkActive='active' class="nav-link">Product</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}
