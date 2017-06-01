import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { WatchComponent } from "app/watch/watch/watch.component";
import { AuthGuardService } from "app/services/auth-guard.service";

export const routes: Routes = [
    {
        path: 'watch/:id',
        component: WatchComponent,
        canActivate: [AuthGuardService],
        data:{levels:['ADMIN','SU']}
    },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);