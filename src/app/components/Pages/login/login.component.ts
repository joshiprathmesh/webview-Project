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
  
  onSubmit (email:string,password:string){
    
    const user = this.users.find(
      (user)=> 
          user.email === email && user.password === password
        );

    if(user)
    {
      console.log("SUBMITTED....!");
    }
    else {
      console.log("Invalid Credentials....!");

    }
  }


}
