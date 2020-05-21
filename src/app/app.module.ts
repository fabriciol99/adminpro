import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistersComponent } from './login/registers.component';

// Rutas
import { APP_ROUTES } from 'src/app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistersComponent,
  ],
  imports: [
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
