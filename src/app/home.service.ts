import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Course} from './models/classroom';
import {User} from './models/user';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {ApolloQueryResult} from 'apollo-client';


const getUserts = gql`
  query {
    listUsers {
      items {
        id
        userName
        displayName
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private apollo: Apollo) { }

  getCourses(): Observable<Course[]> {
      return of(null);
  }

  getUser(): Observable<ApolloQueryResult<User[]>> {
      return this.apollo.watchQuery<User[]>({ query: getUserts }).valueChanges.pipe();
  }

}

