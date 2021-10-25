import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../Models/User';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  terms: Boolean = false;
  pic: Boolean = false;
  user: user;
  constructor(private data: ShareDataService , private router : Router) { }

  ngOnInit(): void {
    this.user =  new user();
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
      console.log(theFile.value);
  }

  Register(){
   // let theFile: any  = document.getElementById('validatedCustomFile');
   // this.user.picture = theFile.value;
   this.user.picture = "https://bootdey.com/img/Content/avatar/avatar5.png"

    this.user.accountCategory = "Customer" ;
    console.log(this.user);
    
    this.data.list.push(this.user);
    this.router.navigate(["/user"])
    
  }

}
