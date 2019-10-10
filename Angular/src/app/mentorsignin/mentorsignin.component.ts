import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-mentorsignin',
  templateUrl: './mentorsignin.component.html',
  styleUrls: ['./mentorsignin.component.scss']
})
export class MentorsigninComponent implements OnInit {
  mail: string;
  pass: string;
  userDetails;
  constructor(private userlogin: Router, private validation: ValidationService) { }

  ngOnInit() {
  }
  msubmit() {
    if (this.mail == null) {
      alert("enter mail address");
    }

    else if (this.pass == null) {
      alert("enter password")
    }

    else {
      this.userlogin.navigate(['/mentorprofile']);
    }
  }
}
