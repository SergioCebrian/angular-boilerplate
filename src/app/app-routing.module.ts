import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'login',
        title: 'Login',
        loadComponent: () => import('./modules/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '**',
        title: 'Not Found',
        loadComponent: () => import('./modules/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, { initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
