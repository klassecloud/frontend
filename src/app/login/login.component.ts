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

isPasswordNull: boolean;
isUsernameNull: boolean;

  ngOnInit() {
  }

  checkPassword(): void {
    this.isPasswordNull = this.user.password == null;
  }

  checkUsername(): void {
    this.isUsernameNull = this.user.username == null;
  }

  login(): void {
    this.checkPassword();
    this.checkUsername();
    if (!this.isUsernameNull && !this.isPasswordNull) {
      alert('Hello, World');
    }
  }

}
