import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/Pages/landing-page/landing-page.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { AllTitlesComponent } from './components/Pages/all-titles/all-titles.component';

export const routes: Routes = [

    {
        path:'',
        component:LandingPageComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'Home/BrowseAll',
        component:AllTitlesComponent
    }
    // {
    //     path:'./',
    //     component:LandingPageComponent
    // }
];
