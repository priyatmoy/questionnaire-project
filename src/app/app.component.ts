import { Component, OnInit } from '@angular/core';
import {AppDataService} from "./app-data.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (public appdataservice: AppDataService) {}
  title = 'angular app';
  GeneralTab = "active";
  medicalTab;
  PersonalTab;
  SummaryTab;
  hidePrevbtn;
  tabCounter = 0;
  GeneralTabContent = 'in active';
  medicalTabContent;
  personalTabContent;
  SummaryTabContent;
  userdata;
  generalData;
  medicalData;
  personalData;

  ngOnInit() {
    this.hidePrevbtn = 'none';
    this.tabCounter = 0;
    this.appdataservice.GetData().subscribe( response => {
      this.userdata = response;
      this.generalData = this.userdata.General;
      this.medicalData = this.userdata.Medical;
      this.personalData = this.userdata.Personal;
    
      console.log("dfdf", this.userdata);
    }
    );
  }
  
  nextClick() {
    console.log("dfdf", this.userdata);
    this.hidePrevbtn = "block";
    if(this.tabCounter === 0) {
      this.medicalTabClicked();
    }
    else if (this.tabCounter === 1) {
      this.personalTabClicked();
    } else if (this.tabCounter === 2) {
      this.summaryTabClicked();
    } 
    
  }
  prevClick() {
    if(this.GeneralTab === 'active')
    this.hidePrevbtn = "none"; 
    if(this.tabCounter === 2) {
      this.medicalTabClicked();
    }
    else if (this.tabCounter === 3) {
      this.personalTabClicked();
    } else if (this.tabCounter === 1) {
      this.generalTabClicked();
    } 
  }
  generalTabClicked(){
    this.hidePrevbtn = "none";
    this.GeneralTabContent = 'in active';
     this.SummaryTabContent='';
      this.personalTabContent ='';
       this.medicalTabContent= '';
        this.tabCounter = 0;
         this.GeneralTab = 'active';
         this.medicalTab = ''; 
         this.PersonalTab = '';
          this.SummaryTab= '';
        }
  medicalTabClicked(){
    this.hidePrevbtn = "";
    this.medicalTabContent= 'in active';
    this.GeneralTabContent = '';
    this.SummaryTabContent='';
     this.personalTabContent ='';
     this.tabCounter = 1;
      this.GeneralTab = '';
      this.medicalTab = 'active';
       this.PersonalTab = '';
        this.SummaryTab= '';
      }
  personalTabClicked(){
    this.hidePrevbtn = "";
    this.personalTabContent = 'in active';
    this.GeneralTabContent = '';
     this.SummaryTabContent='';
       this.medicalTabContent= '';
     this.tabCounter = 2;
      this.GeneralTab = '';
      this.medicalTab = '';
       this.PersonalTab = 'active';
        this.SummaryTab= '';
      }
  summaryTabClicked(){
    this.hidePrevbtn = "";
    this.SummaryTabContent= 'in active';
    this.GeneralTabContent = '';
      this.personalTabContent ='';
       this.medicalTabContent= '';
     this.tabCounter = 3;
     this.GeneralTab = '';
     this.medicalTab = '';
      this.PersonalTab = '';
       this.SummaryTab= 'active';
      }
}
