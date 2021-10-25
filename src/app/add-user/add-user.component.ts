import { Component, OnInit } from '@angular/core';
import { user } from '../Models/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  terms: Boolean = false;
  pic: Boolean = false;
  user: user;
  constructor() { }

  ngOnInit(): void {
    this.user =  new user();
  }

  Save(){
    
  }

  change(){
    if (this.terms==false){
    this.terms=true;
  }else
  this.terms=false;
    console.log(this.terms);
  }

  changePicture(){
    if ((this.user.picture==null) || (this.pic==true)){
      this.pic=false;
    }else
    this.pic=true;
      console.log(this.pic);
    }
  
  

     initialize() {
      let theFile: any  = document.getElementById('validatedCustomFile');
     
      if (theFile.value.length) {
        this.pic=true;
      }
      else {
        this.pic=false;

      }
      console.log(this.pic);
  }

  add(){
    
  }

}
