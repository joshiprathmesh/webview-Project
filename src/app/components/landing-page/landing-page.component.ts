import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatureResourceComponent } from "../feature-resource/feature-resource.component";

@Component({
  selector: 'app-landing-page',
  imports: [NgIf, FormsModule, FeatureResourceComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  isLogIn?:boolean = false;

  isAlertClicked?:boolean = false;

  

  onMouseOver() {
    this.isAlertClicked = !this.isAlertClicked;
    console.log("overrrr");

  }

  onMouseOut() {
    this.isAlertClicked = !this.isAlertClicked;
    console.log("outttt");
    
  }

  onAlertClick (){
    this.isAlertClicked = !this.isAlertClicked;

    setTimeout(() =>{
      this.isAlertClicked = false;
    },3000)
  }
}
