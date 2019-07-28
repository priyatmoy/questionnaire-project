import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  @Input() userData;
  constructor() { }

  ngOnInit() {
    console.log("personal data", this.userData);
  }

}
