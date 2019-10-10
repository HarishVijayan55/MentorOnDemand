import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor, User, Admin, Course, Block } from './quote/user';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  public baseUrl = 'http://localhost:8761';
  // private usersUrl:string;
  
  // private users1Url:string;

  constructor( private http:HttpClient) { 
    // this.usersUrl="http://localhost:8761/user/getUser";
    // this.users1Url="http://localhost:8761/user/user/delete";
  }

  // public findAll():Observable<Block[]>{
  //   return this.http.get<Block[]>(this.usersUrl);
  // }
  // deleteUser(username:number):Observable<any>{
  //   console.log(username);
  //   return this.http.delete(`${this.users1Url}` + username,{responseType:'text'});
  // }


  
  createUser(user:object):Observable<object>{
    console.log(user);
    return this.http.post(`${this.baseUrl}` + '/user/user/signup',user);
  }
  createMentor(mentor:object):Observable<object>{
    console.log(mentor);
    return this.http.post(`${this.baseUrl}` + '/mentor/mentor/signup',mentor);
  }
  createCourse(course:object):Observable<object>{
    console.log(course);
    return this.http.post(`${this.baseUrl}` + '/course/course',course);
  }

  getCourseDetails(courseName:String):Observable<Course>{
    console.log(courseName);
    return this.http.get<Course>(`${this.baseUrl}` +'/course/getCourse/'+courseName);
  }

  getMentorDetails(mentorName:String):Observable<Mentor>{
    console.log(mentorName);
    return this.http.get<Mentor>(`${this.baseUrl}` + '/mentor/getMentor/'+mentorName);
  }
  getUserDetails(userName:String):Observable<User>{
    console.log(userName);
    return this.http.get<User>(`${this.baseUrl}` + '/user/getUser/'+userName);
  }
  getAdmin(email:String):Observable<Admin>{
    return this.http.get<Admin>(`${this.baseUrl}`+ '/admin/getAdmin/'+email);
  }
  getUserDetailsx(){
    return this.http.get('/assets/userCredentials.json');
  }
}

// export interface Credentials{
//   name:String;
//   passw:String;
// }
