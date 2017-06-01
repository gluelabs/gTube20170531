import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home/home.component";
import { ModuleWithProviders } from "@angular/core";
import { AuthGuardService } from "app/services/auth-guard.service";

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService],
        data: {
            levels: ['ADMIN', 'USER', 'SU']
        }
    }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);