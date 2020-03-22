import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faSwimmer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-classoverview',
  templateUrl: './classoverview.component.html',
  styleUrls: ['./classoverview.component.css']
})
export class ClassoverviewComponent implements OnInit {

  mathe = faCalculator;
  deutsch = faEdit;
  chemie = faFlask;
  biologie = faMicroscope;
  englisch = faLanguage;
  sport = faSwimmer;


  constructor() { }

  ngOnInit() {
  }

}
