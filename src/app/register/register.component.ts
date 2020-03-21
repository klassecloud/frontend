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
    nickname: string;
    password: string;
    username: string;
  };
  passwordMatch: boolean;
  passwordToShort: boolean = true;

  ngOnInit(): void {
  }

  isPasswordLongEnough(): boolean {
    return true;
  }

  isPasswordMatching(passwordRepeatEvent: any): void {
    const passwordRepeat = passwordRepeatEvent.target.value;
    if (!this.passwordToShort)
      this.passwordMatch = passwordRepeat === this.user.password;
    else

  }

  validateNoEmptyInputFields(): boolean {
    return;
  }

  validateUserInput(): boolean {
    return this.validateNoEmptyInputFields() && this.passwordMatch;
  }
}


