import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppDataService} from "./app-data.service"


import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { MedicalComponent } from './medical/medical.component';
import { SummaryComponent } from './summary/summary.component';
import { PersonalComponent } from './personal/personal.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    MedicalComponent,
    SummaryComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
