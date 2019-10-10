import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-layout',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  
  `,
  styles: []
})
export class ContentLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
