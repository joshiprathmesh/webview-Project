import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatureResourceComponent } from "../../Carousel-feature-resource/Carousel-feature-resource.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InputbarComponent } from "../../shared/inputbar/inputbar.component";

@Component({
  selector: 'app-landing-page',
  imports: [FormsModule, HeaderComponent, FooterComponent, InputbarComponent, FeatureResourceComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  isLogIn?:boolean = false;

  isAlertClicked?:boolean = false;

  onAlertClick (){
    this.isAlertClicked = !this.isAlertClicked;

    setTimeout(() =>{
      this.isAlertClicked = false;
    },3000)
  }
}
