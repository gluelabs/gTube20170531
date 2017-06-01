import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EserciziVariComponent } from './esercizi-vari/esercizi-vari.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LikeComponent } from './like/like.component';
import { TruncatePipe } from './truncate.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { ShowIfLoggedDirective } from './show-if-logged.directive';
//Modulo ES6/TS, Componenti Angular
const moduliDaEsportare = [
  EserciziVariComponent,
  NavbarComponent,
  FooterComponent,
  LikeComponent,
  TruncatePipe,
  PageNotFoundComponent,
  LoginComponent,
  LoaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [...moduliDaEsportare, ShowIfLoggedDirective],
  exports: [...moduliDaEsportare],
})
export class SharedModule { }
