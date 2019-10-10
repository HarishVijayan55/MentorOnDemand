import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from '../quote/user';
import { HttpClient } from '@angular/common/http';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.scss']
})
export class ManageaccountComponent implements OnInit {
  users:Observable<Block[]>;
  constructor(private httpService:HttpClient, private searchService:ValidationService) { }
  search1:Block[];
  ngOnInit() {
    // this.searchService.findAll().subscribe(data=>{
    //   this.search1=data;
    // });
    // this.reloadData();
  }
  // reloadData(){
  //   this.searchService.findAll().subscribe(data=>{
  //     this.search1=data;
  //   });
  //   this.users=this.searchService.findAll();
  // }
  // deleteUser(username:number){
  //   this.searchService.deleteUser(username).subscribe(data=>{
  //     console.log(data);
  //     this.reloadData();
  //   },
  //   error=> console.log(error));
  }


//}
