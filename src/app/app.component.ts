import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'digital-classroom-frontend';
  isShown:boolean = false;
  bars = faBars;

  autoCloseNav(){
    return this.isShown = false;
  }
}
