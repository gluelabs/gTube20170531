import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SharedModule } from "app/shared/shared.module";
import { HomeModule } from "app/home/home.module";
import { QueueService } from "app/services/queue.service";
import { YoutubeService } from "app/services/youtube.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { WatchModule } from "app/watch/watch.module";
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from "app/services/auth-guard.service";
import { LoginComponent } from "app/shared/login/login.component";
import { UserService } from "app/services/user.service";
import { routing } from "app/app.routing";
import { EserciziModule } from "app/esercizi/esercizi.module";
import { PubSubService } from "app/services/pub-sub.service";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "app/reducer/user.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    HomeModule,
    WatchModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    EserciziModule,
    routing,
    StoreModule.provideStore({ user: userReducer })
  ],
  providers: [PubSubService,QueueService, YoutubeService,AuthGuardService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
