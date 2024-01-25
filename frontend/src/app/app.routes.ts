import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'conversation/:id',
    loadComponent: () => import('./pages/conversation/conversation.page').then( m => m.ConversationPage)
  },
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
];
