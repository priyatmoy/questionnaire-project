import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  @Input() userData;
  constructor() { }

  ngOnInit() {
    console.log("medical data", this.userData);
  }

}
