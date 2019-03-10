//Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
//routes
import { APP_ROUTING } from './app.routes';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
