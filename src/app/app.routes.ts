import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import("./pages/main-menu/main-menu.page").then(p => p.MainMenuPage)
  }
];
