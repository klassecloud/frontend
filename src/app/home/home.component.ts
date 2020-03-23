import { Component, OnInit } from '@angular/core';
import {Course} from '../models/classroom';
import {User} from '../models/user';
import {HomeService} from '../home.service';
import {ApolloQueryResult} from 'apollo-client';
import { AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  constructor(
    private homeService: HomeService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  user: ApolloQueryResult<User[]>;

  course: Course[];

  getCourse(): void {
  }

  getUser(): void {

  }

  ngOnInit() {
  }

}
