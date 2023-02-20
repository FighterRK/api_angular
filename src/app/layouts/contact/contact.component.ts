import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public valuS:any=''

  constructor(public commonApi : TestService){}
  viewData(){
    console.log(this.commonApi.getData());
    
  }

  viewCountry(){
    this.commonApi.getCountries().subscribe((res:any)=>{
      console.log(res);
      
    })
  }
  search(){
    this.commonApi.search(this.valuS).subscribe((dat:any)=>{
      console.log(dat);
      

    })
  }

}
