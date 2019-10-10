import { Component, OnInit } from '@angular/core';
import mentorprofile from '../../assets/mentorprofile.json';
@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.scss']
})
export class MentorprofileComponent implements OnInit {
  m1 = mentorprofile.mentor1;
  m2 = mentorprofile.mentordetails;
  constructor() { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(this.m1.length);
  }

}
