import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EserciziComponent } from "app/esercizi/esercizi/esercizi.component";
import { EsempiComponent } from "app/esercizi/esempi/esempi.component";
import { FormModule } from "app/esercizi/form/form.module";
import { FormContainerComponent } from "app/esercizi/form/form-container/form-container.component";
import { DataDrivenComponent } from "app/esercizi/form/data-driven/data-driven.component";
import { TemplateDrivenComponent } from "app/esercizi/form/template-driven/template-driven.component";


export const routes: Routes = [
    {
        'path': '', component: FormContainerComponent, children: [
            { path: "data-driven", component: DataDrivenComponent },
            { path: "template-driven", component: TemplateDrivenComponent }
        ]
    }];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);