import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-home-layout',
  template: `
   <router-outlet></router-outlet>
  `,
  styles: []
})
export class AngularHomeLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
