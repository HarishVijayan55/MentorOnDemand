import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../validation.service';
import { User, Mentor } from './user';
import { FormControl, Validators,FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  userLogInForm:FormGroup;
  mentorLogInForm:FormGroup
  submitted=false;
  user: User = new User();
  mentor: Mentor = new Mentor();
  // details:any={}
  // mail:string;
  // pass:string;
  // cpass:string;

  // mmail:string;
  // mpass:string;
  // mcpass:string;
  // mtechnology:string;
  // mtime:string;
  // mexperience:string;

  constructor(private formBuilder: FormBuilder, private router: Router,private userService : ValidationService) { }

  ngOnInit() {
    this.userLogInForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
    this.mentorLogInForm = this.formBuilder.group({  
      memail:['',[Validators.required,Validators.email]],
      mpassword:['',[Validators.required,Validators.minLength(6)]],
      knowntechnology:['',[Validators.required]],
      experience:['',[Validators.required]]
    });

    
    
  }
get f(){
  return this.userLogInForm.controls;
}
get g(){
  return this.mentorLogInForm.controls;
}
  onSignUp() {
  
    // this.user = new User();

    this.user.userName = this.userLogInForm.get('email').value;
    this.user.password = this.userLogInForm.get('password').value;
    this.userService.createUser(this.user).subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/signin']);
    if(this.userLogInForm.invalid){
       return;
     }
    }
    onMentorSignUp(){
     this.mentor.mentorName = this.mentorLogInForm.get('memail').value;
     this.mentor.password=this.mentorLogInForm.get('mpassword').value;
     this.mentor.knownCourse=this.mentorLogInForm.get('knowntechnology').value;
     this.mentor.experience=this.mentorLogInForm.get('experience').value;
     this.userService.createMentor(this.mentor).subscribe(data=>console.log(data),error=>console.log(error));
     this.router.navigate(['/signin']);
     if(this.mentorLogInForm.invalid){
       return;
     }
     
  }
 
  // private initUserLogInForm(){
  //   this.UserLogInForm= this.formBuilder.group({
  //     email:new FormControl(null,Validators,required);
  //     password:new FormControl(null,Validators,required);
  //   })
  // }
  // submit(){
  //   if(this.mail==null){
  //     alert("enter mail address");
  //   }

  //   else if(this.pass==null){
  //     alert("enter password")
  //   }
  //   else if(this.cpass!=this.pass){
  //     alert("password and confirm should be same");
  //   }
  //   else{
  //     this.userlogin.navigate(['/signin']);
  //   }
  // }

  // msubmit(){
  //   if(this.mmail==null){
  //     alert("enter mail address");
  //   }

  //   else if(this.mpass==null){
  //     alert("enter password");
  //   }    
  //   // else if(this.mcpass!=this.mpass){
  //   //   alert("password and confirm should be same");
  //   // }
  //   else if(this.mtechnology==null){
  //     alert("Fill Technology");
  //   }
  //   else if(this.mtime==null){
  //     alert("Fill working time");
  //   }
  //   else if(this.mexperience==null){
  //     alert("Enter your experience");
  //   }
  //   else{
  //     this.mentorsign.navigate(['/signin']);
  //   }
  // }

}
