import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EserciziComponent } from "app/esercizi/esercizi/esercizi.component";
import { EsempiComponent } from "app/esercizi/esempi/esempi.component";
import { FormModule } from "app/esercizi/form/form.module";


export const routes: Routes = [
    {
        path: 'esercizi',
        component: EserciziComponent,
        children: [
            { path: '', redirectTo: 'esempi', pathMatch: 'full' },
            { path: 'form', loadChildren: "./form/form.module#FormModule"},
           // { path: 'form', loadChildren: ()=>FormModule},
            { path: 'esempi', component: EsempiComponent },
            { path: '**', redirectTo: 'esempi', pathMatch: 'full' },
        ]

    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);