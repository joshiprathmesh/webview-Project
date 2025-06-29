import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginData } from '../../../../assets/loginData';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('form') form?:ElementRef<HTMLFormElement>;

  users=loginData;

  tempEmail:string="a@email.com";
  tempPassword:string="123";

  
  onSubmit (email:string,password:string){
    
    // userEmail = this.users.find((user)=>user.email == email)
    // console.log()


    
    // if(this.users.find((item))  && password == this.tempPassword )
    // {
    //   console.log("SUBMITTED....!");
    // }
    this.form?.nativeElement.reset();
  }


}
