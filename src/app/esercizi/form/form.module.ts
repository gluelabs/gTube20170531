import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { RouterModule } from "@angular/router";
import { FormContainerComponent } from "app/esercizi/form/form-container/form-container.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { routing } from "app/esercizi/form/form.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [DataDrivenComponent, TemplateDrivenComponent, FormContainerComponent]
})
export class FormModule { }
