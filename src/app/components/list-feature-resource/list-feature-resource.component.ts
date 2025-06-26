import { Component } from '@angular/core';

@Component({
  selector: 'app-list-feature-resource',
  imports: [],
  templateUrl: './list-feature-resource.component.html',
  styleUrl: './list-feature-resource.component.css'
})
export class ListFeatureResourceComponent {

  
    titleData =[
        {
            "id":"_id01",
            "name": "5-Minute Anesthesia Consult",
            "posterImage": "5mAnesC_big.png",
            "description": "The 5-Minute Anesthesia Consult by Nina Singh-Radcliffcan, MD can be a vital source for the practice and teaching of anesthesiology. It presents a collection of 480 diseases and concepts related to the field of anesthesiology.",
            "publisher": "Wolters Kluwer Health | Lippincott Williams & Wilkins",
            "editior": "Nina Singh-Radcliff, MD"
        },
        {
            "id":"_id02",
            "name": "Adult-Gerontology Practice Guidelines",
            "posterImage": "adultGerontology_big.png",
            "description": "Adult-Gerontology Practice Guidelines offers comprehensive information for evidence-based care and management strategies for adult and older adult populations.",
            "publisher": "Springer Publishing Company",
            "editior": " Jill C. Cash, MSN, APN; Cheryl A. Glass, MSN, WHNP"
        },
        {
            "id":"_id03",
            "name": "AHFS Patient Drug Information",
            "posterImage": "ahfsPDI_big.png",
            "description": "AHFS Patient Drug Information is a trusted resource containing evidence-based drug information written in easy-to-understand language for patients.",
            "publisher": "American Society of Health-System Pharmacists (ASHP)",
            "editior": "AHFS Editorial Staff"
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
    ];
}
