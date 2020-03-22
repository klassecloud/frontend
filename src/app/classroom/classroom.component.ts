import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']

})
export class ClassroomComponent implements OnInit {

  arrowLeft = faArrowLeft;
  arrowRight = faArrowRight;
  circle = faCircle;
  close = faTimes;
  files = ['File1', 'File2', 'File3'];
  filesActive = true;
  publicMessages = ['Message1', 'Message2', 'Message3'];
  privateMessages = ['Private Nachricht', '1Mehr Private NAchrichten', 'Viel mehr Private NAchrichten'];
  messagesActive = false;
  teacherActive = false;
  activeQuestion = true;
  activeSubmit = true;
  activeCancel = true;



showFiles() {
  if (this.filesActive != true) {
    document.querySelector('.tabFiles').classList.add('class', 'active');
    document.querySelector('.tabTeacher').classList.remove('class', 'active');
    document.querySelector('.tabChat').classList.remove('class', 'active');
    this.filesActive = true;
    this.messagesActive = false;
    this.teacherActive = false;
  }
}

showMessages() {
  if (this.messagesActive != true) {
    document.querySelector('.tabChat').classList.add('class', 'active');
    document.querySelector('.tabFiles').classList.remove('class', 'active');
    document.querySelector('.tabTeacher').classList.remove('class', 'active');
    this.messagesActive = true;
    this.filesActive = false;
    this.teacherActive = false;
  }
}

showTeacher() {
  if (this.teacherActive != true) {
    document.querySelector('.tabTeacher').classList.add('class', 'active');
    document.querySelector('.tabFiles').classList.remove('class', 'active');
    document.querySelector('.tabChat').classList.remove('class', 'active');
    this.teacherActive = true;
    this.filesActive = false;
    this.messagesActive = false;
  }
}

  showQuestion() {
  return this.activeQuestion = !this.activeQuestion;
  }

  showSubmit() {
    return this.activeSubmit = !this.activeSubmit;
  }

  showCancel() {
    return this.activeCancel = !this.activeCancel;
  }

  /*
  * TODO: muss noch gefixt werden.
  closeAllWindows() {
    if (this.showSubmit()) {
      this.activeQuestion = true;
      this.activeCancel = true;
      return null;
    }
    if (this.showQuestion()) {
      this.activeCancel = true;
      this.activeSubmit = true;
      return null;
    }
    if (this.showCancel()) {
      this.activeCancel = true;
      this.activeQuestion = true;
      return null;
    }
  }
   */

        constructor() { }

    ngOnInit() {
  }

}
