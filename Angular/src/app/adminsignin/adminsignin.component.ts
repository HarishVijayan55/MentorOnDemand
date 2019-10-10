import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Admin } from '../quote/user';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent implements OnInit {
  adminForm:FormGroup;
  adminsubmitted=false;
  adminemail:string;
  adminObj:Admin[];
  adminadmin:any;

  // mail: string;
  // pass: string;

  constructor(private formBuilder: FormBuilder,private router:Router,private adminservice:ValidationService) { }

  ngOnInit() {
    this.adminForm = this.formBuilder.group({
      adminemail:['',[Validators.required,Validators.email]],
      adminpassword:['',[Validators.required, Validators.minLength(6)]]
    });
  }
  get g() { return this.adminForm.controls;}
  onAdminSubmit(){
    console.log("hi trainee");
    this.adminsubmitted=true;
    if(this.adminForm.invalid){
      return;
    }
    else{
      this.adminservice.getAdmin(this.adminForm.get('adminemail').value).subscribe((data:Admin)=>{
        this.adminadmin=data;

        if(this.adminadmin==null){
          alert("Invalid credentials 1");
        }
         else if(this.adminadmin.password==this.adminForm.get('adminpassword').value){
          this.router.navigateByUrl('/admintechnology');
        }
        else{
          console.log(this.adminadmin.adminemail);
          alert("invalid credentials 2");
        }
      })
    }
  }
  // submit() {
  //   if (this.mail == null) {
  //     alert("enter mail address");
  //   }

  //   else if (this.pass == null) {
  //     alert("enter password")
  //   }

  //   else {
  //     this.userlogin.navigate(['/admintechnology']);
  //   }
  // }

}
