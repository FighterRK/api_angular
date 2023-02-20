import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit{
  public valuS:any
  public valuS2:any
  public valuS3:any
  public names = '';
  post :any 
  viewCountry(){
    this.getApiServices.getCountries().subscribe((res:any)=>{
      console.log(res);
      
    })
  }

  constructor(public  getApiServices : MainServiceService){}
  viewData(){
     console.log(this.getApiServices.viewData());
     this.names = this.getApiServices.viewData();
    
  }
  search(){
   let coun = this.getApiServices.search(this.valuS).subscribe((dat1:any)=>{
      console.log(coun);
      //this.post = JSON.stringify(dat);

      
      

    })
  }

  searchLang(){
    this.getApiServices.lanSearch(this.valuS3).subscribe((dat2:any)=>{
      console.log(dat2);
      //this.post = JSON.stringify(dat);
      

    })
  }

  Reg(){
    this.getApiServices.Reg(this.valuS).subscribe((dat3:any)=>{
      console.log(dat3);
      //this.post = JSON.stringify(dat);
      

    })
  }
  country :any;

  
  
   ngOnInit(){
    this.country = this.getApiServices.getCountries()
       
   }


}
export interface country{
  name:string
}
