import { Component, OnInit } from '@angular/core';
import {UserI} from '../../models/user';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public date:Date = new Date();
  userForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('', [
            Validators.required,
            Validators.email
          ]),
    password: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

  register(frm:UserI){
    console.log(this.userForm);
    console.log(frm);
  }
}
