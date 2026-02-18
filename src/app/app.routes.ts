
import { Home } from './features/home/home';
import { Chrono } from './features/chrono/chrono';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: 
            () => import("./features/home/home")
            .then(h => h.Home)
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "chrono",
        loadComponent: 
            () => import("./features/chrono/chrono")
            .then(c => c.Chrono)
    },
    {
        path: "product",
        loadComponent: 
            () => import("./features/product/product")
            .then(p => p.Product)
    },
    {
        path: "formulaire",
        loadComponent: 
            () => import("./features/formulaire/formulaire")
            .then(f => f.Formulaire)
    },
    {
        path: "age_form",
        loadComponent: 
            () => import("./features/age-formulaire/age-formulaire")
            .then(f => f.AgeFormulaire)
    },
    {
        path: "formule",
        loadComponent: 
            () => import("./features/formule1/formule1")
            .then(f => f.Formule1)
    },
    {
        path: "**",
        loadComponent: 
            () => import("./errors/notfound/notfound")
            .then(e => e.Notfound)
    }
];
