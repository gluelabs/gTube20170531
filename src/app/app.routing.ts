import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "app/shared/page-not-found/page-not-found.component";
import { WatchComponent } from "app/watch/watch/watch.component";
import { LoginComponent } from "app/shared/login/login.component";
import { AuthGuardService } from "app/services/auth-guard.service";
import { EserciziVariComponent } from "app/shared/esercizi-vari/esercizi-vari.component";
import { HomeComponent } from "app/home/home/home.component";
import { EserciziModule } from "app/esercizi/esercizi.module";

export const routes: Routes = [
    {
        path: 'eserciziVari', component: EserciziVariComponent, canActivate: [AuthGuardService], data: { levels: ['ADMIN', 'SU'] }
    },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });