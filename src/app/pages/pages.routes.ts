import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent ,
    children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]
  }
];

export const APP_ROUTING = RouterModule.forChild(APP_ROUTES);
