import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angularhome',
  templateUrl: './angularhome.component.html',
  styleUrls: ['./angularhome.component.scss']
})
export class AngularhomeComponent implements OnInit {
profileform=new FormGroup({ name: new FormControl('')})
  constructor(public router: Router) { }

  ngOnInit() {
  }
redirect()
{
  this.router.navigate(['/paydetails']);


}
}
