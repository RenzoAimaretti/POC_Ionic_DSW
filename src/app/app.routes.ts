import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/main.page').then((m) => m.MainPage),
  },
  {
    path: 'credits',
    loadComponent: () => import('./credits/credits.page').then( m => m.CreditsPage)
  },
];
