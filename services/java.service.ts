import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

 // constructor() { }
  url:string = 'assets/java.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getalljavacourse(){
     return this.httpClient.get(this.url)
}
}