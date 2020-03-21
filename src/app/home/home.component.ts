import { Component, OnInit } from '@angular/core';
import {Course} from '../models/classroom';
import {User} from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  user: User = new class implements User {
    email: string;
    id: number;
    nickname: string;
    password: string;
    username: string;
  }

  course: Course[];

  getCourse(): void {
  }

  ngOnInit(): void {
  }



}
