import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']

})
export class ClassroomComponent implements OnInit {

  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;
  circle = faCircle;
  files = ['File1', 'File2', 'File3'];
  filesShow = true;
  messages = ['Message1', 'Message2', 'Message3'];
  messageShow = false;


  constructor() { }

  ngOnInit() {
  }

}
