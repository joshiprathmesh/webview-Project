import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/Pages/landing-page/landing-page.component';
import { LoginComponent } from './components/Pages/login/login.component';
import { AllTitlesComponent } from './components/Pages/all-titles/all-titles.component';
import { NoPageFoundComponent } from './components/Pages/no-page-found/no-page-found.component';

export const routes: Routes = [

    {
        path:'',
        component:LandingPageComponent
    },
    {
        path:'Home',
        component:LandingPageComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'Home/BrowseAll',
        component:AllTitlesComponent
    },
    {
        path:'**',
        component:NoPageFoundComponent
    }
];
