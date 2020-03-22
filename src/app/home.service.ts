import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Course} from './models/classroom';

@Injectable({
  providedIn: 'root'
})


export class HomeService {

  constructor() {
  }
}
/*
  getCourses(): Observable<Course[]> {
      return of(null);
  }

  getUser():
}
 */

