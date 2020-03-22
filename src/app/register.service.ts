import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apollo: Apollo) { }


}
