// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signin',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.scss']
// })
// export class SigninComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

import { Router } from '@angular/router';
import { Mentor, User } from '../quote/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  mentorForm:FormGroup;
  submitted = false;
  email:string;
  password:string;
  mentorObj:Mentor[];
  admin:any;

  userForm:FormGroup;
  usersubmitted=false;
  useremail:string;
  userObj:User[];
  useradmin:any;
  // jsonURL;
  // details:any;
  // index:any;
  // validStatus:boolean;

  // mail:string;
  // pass:string;
  // mmail:string;
  // mpass:string;
  constructor(private formBuilder: FormBuilder,private router:Router,private userservice:ValidationService,private studentservice:ValidationService) { }
  // model:any={
  //   email:String,
  //   password:String,
  //   errorMessage:String,
  //   invalidStatus:Boolean

  // };
  // loginForm: FormGroup;
  // submitted = false;
  // match=false;
  // mentorName: String;

  ngOnInit() {    
    this.mentorForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.userForm = this.formBuilder.group({
      useremail:['',[Validators.required,Validators.email]],
      userpassword:['',[Validators.required, Validators.minLength(6)]]
    });
    // this.model.email="";
    // this.model.password="";
    // this.model.errorMessage="";
  }
  get f() { return this.mentorForm.controls; }
  get g() { return this.userForm.controls;}

  onSubmit(){

    console.log("hi");
    this.submitted=true;
    this.usersubmitted=true;
    if(this.mentorForm.invalid){
      return;
    }
    else{
      this.userservice.getMentorDetails(this.mentorForm.get('email').value).subscribe(data=>{
        this.admin=data;
  

        if(this.admin==null){
          alert("Invalid credentials 1");
        }
        else if(this.admin.password==this.mentorForm.get('password').value){
          // alert("valid");
          this.router.navigateByUrl('/mentorprofile');
        }
        else{
          console.log(this.admin.email);
          alert("Invalid credentials 2");
        }
      })
    }
  }
  onUserSubmit(){
    console.log("hi trainee");
    this.usersubmitted=true;
    if(this.userForm.invalid){
      return;
    }
    else{
      this.studentservice.getUserDetails(this.userForm.get('useremail').value).subscribe(data=>{
        this.useradmin=data;

        if(this.useradmin==null){
          alert("Invalid credentials 1");
        }
        else if(this.useradmin.password==this.userForm.get('userpassword').value){
          this.router.navigateByUrl('/studentindex');
        }
        else{
          console.log(this.useradmin.useremail);
          alert("invalid credentials 2");
        }
      })
    }
  }  

  //   this.mentorName = this.loginForm.get("email").value;
  //   this.userservice.getMentorDetails(this.mentorName).subscribe((data =>{
      
  //     this.details=data;
      
  //     console.log(this.details);
  //     for(this.index=0;this.index<(this.details.length);this.index++){
  //       if(this.details[this.index].mentorName == this.model.email && this.details[this.index].password == this.model.password ){
  //         // this.userservice.u_name=this.details[this.index].name;
  //         this.match=true;
  //         break;
  //       }
  //       else{
  //         this.match=false;
  //       }
  //     }
  //       if(this.match == true){
  //         this.router.navigate(['/mentorprofile']);
  //       }
  //       else{
  //         this.model.errorMessage="username and password mismatch";
  //         this.model.invalidStatus=true;
  //       }
     
  //   }))
  // }

  // submit(){
  //   if(this.mail==null){
  //     alert("enter mail address");
  //   }

  //   else if(this.pass==null){
  //     alert("enter password")
  //   }

  //   else{
  //     this.userlogin.navigate(['/studentindex']);
  //   }
  // }
  // msubmit(){
  //   if(this.mmail==null){
  //     alert("enter mail address");
  //   }

  //   else if(this.mpass==null){
  //     alert("enter password")
  //   }

  //   else{
  //     this.userlogin.navigate(['/mentorprofile']);
  //   }
  // }

}
  
  
  // LogInForm: FormGroup;
  // submitted = false;

  // constructor(private formBuilder: FormBuilder, private validationService: ValidationService, private route: Router, ) {

  // }
  // userDetails;
  // model: any = { username: String, password: String, errorMessage: String, validStatus: Boolean }
  // ngOnInit() {
  //   this.initlogInForm();
  //   this.model.username = "";
  //   this.model.password = "";
  //   this.model.errorMessage = "";
  //   this.model.invalidStatus = false;
  // }
  // onSubmit() {
  //   this.submitted = true;
  //   this.userDetails = this.validationService.getUserDetails().subscribe((data: Credentials) => {
  //     if (data[0].name == this.model.username && data[0].passw == this.model.password) {
  //       this.route.navigate(['/user']);

  //     }
  //     else {
  //       this.model.username = "";
  //       this.model.password = "";
  //       this.model.errorMessage = "username or password is incorrect";
  //       this.model.invalidStatus = true;
  //     }
  //   });

  // }

  // get f() { return this.LogInForm.controls; }

  // private initlogInForm() {
  //   this.LogInForm = this.formBuilder.group({
  //     Email: new FormControl('', [Validators.required, Validators.email]),
  //     Password: new FormControl('', [Validators.required, Validators.minLength(6)])
  //   });
  // }


