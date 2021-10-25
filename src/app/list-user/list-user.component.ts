import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {user} from  "../Models/User";
import { ShareDataService } from '../services/share-data.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  allUser: user[];
  List: user[];
  inputCategory: string;
  constructor(private route: ActivatedRoute , private data: ShareDataService) { }

  ngOnInit(): void {

    this.allUser= this.data.list ;
    
    this.route.paramMap.subscribe(
      (params)=>
      {
        let category= params.get('category')
        this.List= this.allUser.filter(user=>user.accountCategory === category)}
    );
  }

  delete(user:user){
    let i = this.List.indexOf(user);
    this.List.splice(i,1);}
}
