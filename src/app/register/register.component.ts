import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  user: User = new class implements User {
    email: string;
    id: number;
    nickname: null;
    password: null;
    username: null;
  };
  repeatPassword: null;
  passwordDontMatch: boolean;
  passwordToShort: boolean;
  nicknameEmpty: boolean;
  usernameEmpty: boolean;

  ngOnInit(): void {
  }
  isPasswordLongEnough(): void {
    if (this.user.password == null || this.user.password.length < 8)
      this.passwordToShort = true;
    else
      this.passwordToShort = false;
  }
  isPasswordMatching(): void {
    if (this.repeatPassword == null)
      this.passwordDontMatch = true;
    else
      this.passwordDontMatch = !(this.repeatPassword === this.user.password);
  }
  isUsernameEmpty(): void {
    this.usernameEmpty = this.user.username == null || this.user.username.length < 1;
  }
  isNicknameEmpty(): void {
    this.nicknameEmpty = this.user.nickname == null || this.user.nickname.length < 1;
  }
  signUp(): void {
      this.isPasswordLongEnough();
      this.isPasswordMatching();
      this.isUsernameEmpty();
      this.isNicknameEmpty();
      if (!this.passwordToShort && !this.passwordDontMatch && !this.nicknameEmpty && !this.usernameEmpty) {
        alert('Hello, World!');
      }
  }

}


