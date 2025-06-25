import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InputbarComponent } from "../../shared/inputbar/inputbar.component";
import { TitleListContainerComponent } from "../../title-list-container/title-list-container.component";

@Component({
  selector: 'app-all-titles',
  imports: [HeaderComponent, FooterComponent, InputbarComponent, TitleListContainerComponent],
  templateUrl: './all-titles.component.html',
  styleUrl: './all-titles.component.css'
})
export class AllTitlesComponent {

}
