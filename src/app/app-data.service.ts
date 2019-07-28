import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppDataService {

  constructor(private http: HttpClient) { }


  GetData() {
    return this.http.get ('../assets/general.json');
  }

}
