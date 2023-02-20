import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService  {
  constructor(public http:HttpClient){}
  
  
  
  public items : any = [];

  addItem(newItem: any) {
    this.items.push(newItem);
  }

  viewData(){
    return this.items;
    
  }
  getCountries(){
    return this.http.get('https://restcountries.com/v3.1/all')
  }

  
  search(search:string){
    return this.http.get('https://restcountries.com/v3.1/name/' + search)
  }

  lanSearch(val:any){
    return this.http.get('https://restcountries.com/v3.1/lang/' + val)
  }

  Reg(val:any){
    return this.http.get('https://restcountries.com/v3.1/region/' + val)
  }


}

  // addData(value : any){
  //   return this.dataShare.push(value)
  // }

 

