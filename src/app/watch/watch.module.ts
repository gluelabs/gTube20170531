import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch/watch.component';
import { VideoFrameComponent } from './video-frame/video-frame.component';
import { RelatedComponent } from './related/related.component';
import { CommentsComponent } from './comments/comments.component';
import { routing } from "app/watch/watch.routing";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    WatchComponent, 
    VideoFrameComponent, 
    RelatedComponent, 
    CommentsComponent],
    exports:[WatchComponent]
})
export class WatchModule { }
