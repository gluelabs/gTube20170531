import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { WatchLaterComponent } from './watch-later/watch-later.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from "app/shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { routing } from "app/home/home.routing";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [VideoListComponent, VideoItemComponent, WatchLaterComponent, HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
