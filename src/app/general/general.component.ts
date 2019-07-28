import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor() { }
  @Input() userData;
  showAdditionalQuestion;
  test;
  additionalQues;
  noclicked;
  yesclicked;
  ngOnInit() {
    console.log('userdata:', this.userData);
  }

  anwserValue (anserval) {
    this.yesclicked = true;
    console.log('ans is: ', anserval);
    this.test = true;
    this.showAdditionalQuestion = true;
this.additionalQues = "Hide Question";
  }

  showhidequestion(answer) {
    if(answer = "") {
this.test = false;
    }
    this.showAdditionalQuestion = ! this.showAdditionalQuestion;
    if(!this.showAdditionalQuestion) {
      this.additionalQues = "Show Question";
    } else {
      this.additionalQues = "Hide Question";
    }

  }
}
