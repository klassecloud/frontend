import { Component } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'digital-classroom-frontend';
  isShown:boolean = false;
  elipse = faEllipsisV;
  settings = faCogs;
  dashboard = faHome;
  school = faGraduationCap;
  register = faUsersCog;
  signIn = faSignInAlt;
  chat = faComments;

  autoCloseNav() {
    return this.isShown = false;
  }

}
