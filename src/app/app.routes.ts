import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent ,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
