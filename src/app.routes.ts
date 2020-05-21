import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { NopagefoundComponent } from './app/shared/nopagefound/nopagefound.component';

import { RegistersComponent } from './app/login/registers.component';

const appRoutes: Routes = [
     { path: 'login', component: LoginComponent},
    { path: 'register', component: RegistersComponent},
    { path: '**', component: NopagefoundComponent }

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} ) ;
