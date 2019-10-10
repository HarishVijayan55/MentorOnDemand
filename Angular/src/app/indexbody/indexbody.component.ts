import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Course } from '../quote/user';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indexbody',
  templateUrl: './indexbody.component.html',
  styleUrls: ['./indexbody.component.scss']
})
export class IndexbodyComponent implements OnInit {
  searchTechnologyForm:FormGroup;
  searchtechnologysubmitted=false;
  searchtechnology:string;
  courseObj:Course[];
  courseadmin:any;

  constructor(private formBuilder: FormBuilder,private router:Router,private searchtechnologyservice:ValidationService) { }

  ngOnInit() {
    this.searchTechnologyForm = this.formBuilder.group({
      searchtechnology:['',[Validators.required,Validators.email]],  
    });
  }
  get s() { return this.searchTechnologyForm.controls;}

  searchTechnologySubmit(){
    
   this.searchtechnologysubmitted=true;
    console.log("hi trainee1");
    //  if(this.searchTechnologyForm.valid){
    //    console.log("hi trainee");
    //   return;
    //  }
    //  else{
      this.searchtechnologyservice.getUserDetails(this.searchTechnologyForm.get('searchtechnology').value).subscribe(data=>{
        this.courseadmin=data;
       
         if(this.courseadmin==null){
          
          alert("Invalid credentials 1");
         }
        //  else if(this.courseadmin.searchtechnology==this.searchTechnologyForm.get('searchTechnology').value){
        //    this.router.navigateByUrl('/studentindex');
        //  }
         else{
          console.log(this.courseadmin.searchtechnology);
          // this.router.navigateByUrl("/javahome");
        // alert("invalid credentials 2");
        }
    })
    }
  }
//}
