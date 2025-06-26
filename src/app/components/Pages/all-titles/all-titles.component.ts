import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { InputbarComponent } from "../../shared/inputbar/inputbar.component";
import { ListFeatureResourceComponent } from "../../list-feature-resource/list-feature-resource.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-all-titles',
  imports: [CommonModule, HeaderComponent, FooterComponent, InputbarComponent, ListFeatureResourceComponent],
  templateUrl: './all-titles.component.html',
  styleUrl: './all-titles.component.css'
})
export class AllTitlesComponent {
resources: string[] = ['All Resources', 'Laboratory', 'Nursing', 'Medical'];
publishers: string[] = ['Publisher', 'Mc-Graw Hill', 'Elsevier', 'LWW', 'Wielys'];
}
