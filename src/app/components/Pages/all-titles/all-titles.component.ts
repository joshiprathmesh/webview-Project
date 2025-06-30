import { Component, EventEmitter, Output } from '@angular/core';
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

// @Output() selectedValue = new EventEmitter<string>();

resources: string[] = ['All Resources', 'Laboratory', 'Nursing', 'Medical'];
publishers: string[] = ['Publisher', 'McGraw-Hill Education', 'Elsevier', 'Lippincott Williams & Wilkins', 'John Wiley & Son Inc. and its affiliates','American Society of Health-System Pharmacists (ASHP)'];

selectedValue:any="";


titleData:{
    id:string,
    name:string,
    posterImage:string,
    description:string,
    publisher:string,
    editior:string
  }[] =[
      {
          "id":"_id01",
          "name": "5-Minute Anesthesia Consult",
          "posterImage": "5mAnesC_big.png",
          "description": "The 5-Minute Anesthesia Consult by Nina Singh-Radcliffcan, MD can be a vital source for the practice and teaching of anesthesiology. It presents a collection of 480 diseases and concepts related to the field of anesthesiology.",
          "publisher": "Elsevier",
          "editior": "Nina Singh-Radcliff, MD"
      },
      {
          "id":"_id02",
          "name": "Adult-Gerontology Practice Guidelines",
          "posterImage": "adultGerontology_big.png",
          "description": "Adult-Gerontology Practice Guidelines offers comprehensive information for evidence-based care and management strategies for adult and older adult populations.",
          "publisher": "Elsevier",
          "editior": " Jill C. Cash, MSN, APN; Cheryl A. Glass, MSN, WHNP"
      },
      {
          "id":"_id03",
          "name": "AHFS Patient Drug Information",
          "posterImage": "ahfsPDI_big.png",
          "description": "AHFS Patient Drug Information is a trusted resource containing evidence-based drug information written in easy-to-understand language for patients.",
          "publisher": "American Society of Health-System Pharmacists (ASHP)",
          "editior": "Brain Turker"
      },
      {
          "id":"_id04",
          "name": "Cardiovascular Care Made Incredibly Visual",
          "posterImage": "cardioCareVisual_big.png",
          "description": "Cardiovascular Care Made Incredibly Visual simplifies complex cardiovascular care concepts with engaging visuals, helpful diagrams, and clinical guidance.",
          "publisher": "Lippincott Williams & Wilkins",
          "editior": "Lippincott Williams & Wilkins Staff"
      },
      {
          "id":"_id05",
          "name": "CURRENT Practice Guidelines In Primary Care",
          "posterImage": "currentPrimaryCare_big.png",
          "description": "CURRENT Practice Guidelines in Primary Care provides quick access to screening, prevention, and treatment guidelines for the most common outpatient conditions.",
          "publisher": "McGraw-Hill Education",
          "editior": "Joseph S. Esherick, Daniel S. Clark, Evan D. Slater"
      },
      {
          "id":"_id06",
          "name": "FITZPATRICK'S COLOR ATLAS AND SYNOPSIS OF CLINICAL DERMATOLOGY",
          "posterImage": "fitzDerm_big.png",
          "description": "Fitzpatrick's Color Atlas and Synopsis of Clinical Dermatology is a must-have resource for visual diagnosis of skin disorders and diseases.",
          "publisher": "McGraw-Hill Education",
          "editior": "Klaus Wolff, MD; Richard Allen Johnson, MD; Arturo Saavedra, MD"
      }
      // {
      //   "id":"_id07",
      //   "name": "Acute Medicine: A Practical Guide to the Management of Medical Emergencies",
      //   "posterImage": "fitzDerm_big.png",
      //   "description": "Acute Medicine: A Practical Guide to the Management of Medical Emergencies",
      //   "publisher": "John Wiley & Son Inc. and its affiliates",
      //   "editior": "John Wiley & Son Inc. and its affiliates"
      // }
  ];

  sortedTiltles?:{
    id:string,
    name:string,
    posterImage:string,
    description:string,
    publisher:string,
    editior:string
  }[]=this.titleData; 




  onSelectionChange(event:Event){
   const sortbyPublisher = (event.target as HTMLSelectElement).value;
      this.selectedValue = sortbyPublisher;
      if(this.selectedValue == "publisher" )
      {
        this.sortedTiltles = this.titleData; 

      }
      else {
        this.sortedTiltles = this.titleData.filter((item)=> (item.publisher).toLowerCase() == sortbyPublisher); 
      }
      // return this.titleData =this.titleData.find((item)=> (item.publisher).toLowerCase() == sortbyPublisher); 
  }

}
