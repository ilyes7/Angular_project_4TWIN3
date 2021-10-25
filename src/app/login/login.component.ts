import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../Models/User';
import { ShareDataService } from '../services/share-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  errMessage: String = "";

  constructor(private data: ShareDataService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'password': new FormControl('', Validators.required)
    });
  }

  checkUser(myForm: FormGroup) {
    console.log(myForm.value);
    this.data.list.forEach(
      (user: user) => {
        if ((user.email === myForm.controls['email'].value) &&
          (user.password === myForm.value.password)) {
          this.router.navigate(["/"])
        }
        else {
          this.errMessage = " Invalid Email or Password";
        }
      }
    );

  }

}
