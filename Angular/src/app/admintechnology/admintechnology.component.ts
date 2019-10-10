import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../quote/user';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';
@Component({
  selector: 'app-admintechnology',
  templateUrl: './admintechnology.component.html',
  styleUrls: ['./admintechnology.component.scss']
})
export class AdmintechnologyComponent implements OnInit {
  addTechnologyForm:FormGroup;
  submitted=false;
  course: Course = new Course();
  constructor(private formBuilder: FormBuilder, private router: Router,private addTechnologyService : ValidationService) { }

  ngOnInit() {
    this.addTechnologyForm = this.formBuilder.group({
      addtechnology:['',[Validators.required]]
    });
  }
  get a(){
    return this.addTechnologyForm.controls;
  }
  onAddTechnnology() {
  
    // this.user = new User();

    this.course.courseName = this.addTechnologyForm.get('addtechnology').value;
    
    this.addTechnologyService.createCourse(this.course).subscribe(data => console.log(data), error => console.log(error));
    
    if(this.addTechnologyForm.invalid){
       return;
     }
  }

}
