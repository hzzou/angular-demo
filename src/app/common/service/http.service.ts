import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/data.json';

  getConfig(){
    return this.http.get(this.configUrl);
  }
}
