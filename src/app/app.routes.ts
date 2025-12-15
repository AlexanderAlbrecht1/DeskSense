import { Imprint } from './components/imprint/imprint';
import { Main } from './components/main/main';
import { Routes } from '@angular/router';
import { PrivacyPolicy } from './components/privacy-policy/privacy-policy';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';

export const routes: Routes = [
  {path: '', component: Main},
  {path: 'imprint', component: Imprint},
  {path:'privacy-policy', component: PrivacyPolicy},
  {path:'login', component: Login},
  {path:'register', component: Registration}
];
