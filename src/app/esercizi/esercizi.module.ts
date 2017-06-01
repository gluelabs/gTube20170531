import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EserciziComponent } from './esercizi/esercizi.component';
import { EsempiComponent } from './esempi/esempi.component';
import { routing } from "app/esercizi/esercizi.routing";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing
  ],
  declarations: [EserciziComponent, EsempiComponent]
})
export class EserciziModule { }
