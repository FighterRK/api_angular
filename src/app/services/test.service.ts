import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public dataShare : any = [];
  public vaue : string = ''

  //constructor() { }

  constructor(public http:HttpClient){}

  getData(){
    return this.dataShare
  }

  addData(value : any){
    return this.dataShare.push(value)
  }

  getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all')
  }

  search(search:string){
    return this.http.get('https://restcountries.com/v3.1/name/' + search)
  }
}
