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
  filesActive = false;
  messages = ['Message1', 'Message2', 'Message3'];
  messagesActive = false;
  teacherActive = false;

  /*
  showFiles() {
    // tslint:disable-next-line:triple-equals
    this.filesActive != true ? this.checkShow() : this.filesActive = false;
  }

  showMessages() {
    // tslint:disable-next-line:triple-equals
    this.messagesActive != true ? this.messagesActive = true : this.messagesActive = false;
  }

  showTeacher() {
    // tslint:disable-next-line:triple-equals
    this.teacherActive != true ? this.teacherActive = true : this.teacherActive = false;
  }
*/

  constructor() { }

  ngOnInit() {
  }

}
