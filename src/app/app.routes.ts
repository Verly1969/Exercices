import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Chrono } from './features/chrono/chrono';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () => import("./features/home/home").then(h => h.Home)
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "chrono",
        loadComponent: () => import("./features/chrono/chrono").then(c => c.Chrono)
    },
    {
        path: "product",
        loadComponent: () => import("./features/product/product").then(p => p.Product)
    },
    {
        path: "formulaire",
        loadComponent: () => import("./features/formulaire/formulaire").then(f => f.Formulaire)
    },
    {
        path: "**",
        loadComponent: () => import("./errors/notfound/notfound").then(e => e.Notfound)
    }
];
