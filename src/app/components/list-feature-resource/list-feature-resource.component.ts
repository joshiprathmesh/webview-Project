import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-feature-resource',
  imports: [FormsModule,NgIf],
  templateUrl: './list-feature-resource.component.html',
  styleUrl: './list-feature-resource.component.css'
})
export class ListFeatureResourceComponent {

    @Input() selectedValue:string | undefined ="";
    @Input() sortedTiltles?:{
    id:string,
    name:string,
    posterImage:string,
    description:string,
    publisher:string,
    editior:string
  }[];

  
}
