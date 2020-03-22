import { Component, OnInit } from '@angular/core';
import {Course} from '../models/classroom';
import {User} from '../models/user';
import {HomeService} from '../home.service';
import {ApolloQueryResult} from 'apollo-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  user: ApolloQueryResult<User[]>;

  course: Course[];

  getCourse(): void {
  }

  getUser(): void {

  }

  ngOnInit(): void {
    this.homeService.getUser().subscribe(user => {
      this.user = user;
        console.log(this.user.data.listUsers.items[0]);
    }
    );
  }



}
