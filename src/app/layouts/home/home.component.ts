import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public commonApi : TestService){}


  addData(){
    
  const dataS = {
    'name':'rahul'
    
  }
  this.commonApi.addData(dataS);
  //console.log(this.commonApi.getData());
  

  }
  

}
