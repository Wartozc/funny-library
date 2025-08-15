import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ForgetPassword } from './pages/forget-password/forget-password';

export const routes: Routes = [
  {
    path: 'main',
    component: Main,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'maintenances',
    loadChildren: () => import('./maintenances.routes'),
  },
  {
    path: 'forget-password', component: ForgetPassword
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];
