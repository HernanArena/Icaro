//Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

//routes
import { APP_ROUTING } from './pages.routes';

//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],
  exports:[
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    APP_ROUTING
  ],
  providers:[

  ]
})
export class PagesModule { }
