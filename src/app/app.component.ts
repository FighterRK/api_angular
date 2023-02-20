import { Component ,OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public username = '';
  public mobile = '';
  public email = '';

  title = 'service-app';
  reactiveForm : any;

 //constructor(public  getApiServices : MainServiceService){}

  constructor (private fb:FormBuilder, public getApiService : MainServiceService){}
  

 addingData(form: FormGroup){
   const myValues = [form.value.name,form.value.email,form.value.mobile];
   
   this.getApiService.addItem(myValues)

 }


  ngOnInit(): void {
      this.reactiveForm = this.fb.group({
        name : [''],
        mobile: [''],
        email : ['']
      })
  }

  // onSubmit(form: FormGroup){
  //   this.username=form.value.name;
  //   this.mobile=form.value.mobile;
  //   this.email=form.value.email;
  //   console.log(form.value);
    

  // }
}
