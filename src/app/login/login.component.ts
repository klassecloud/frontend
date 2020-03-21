import {Component, Input, OnInit} from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

 user: User = new class implements User {
   email: string;
   id: number;
   nickname: string;
   password: string;
   username: string;
 };

  onChangeFunction() {
   console.log(this.user.username);
  }



  ngOnInit() {
  }

}
