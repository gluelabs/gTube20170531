import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { YoutubeService } from "app/services/youtube.service";
import { Video } from "app/models/video.model";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { PubSubService } from "app/services/pub-sub.service";

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css']
})
export class VideoFrameComponent implements OnInit, OnChanges {
  @Input() id: string;
  video: Video;
  safeUrl: SafeUrl;
  constructor(
    private yt: YoutubeService,
    private ds: DomSanitizer,
    private pubsub: PubSubService

  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Cambiamento = ", changes);
    if (changes.id) {
      this.getVideo(this.id);
    }
  }

  getVideo(id) {
    this.pubsub.notify('SHOW_PAGE_LOADER', true);
    console.log(`Prendi il video ${this.id}`);
    this.yt.getVideo(id).subscribe(
      (r) => {
        this.video = r
        this.safeUrl = this.ds.bypassSecurityTrustResourceUrl(r.url);
        this.pubsub.notify('SHOW_PAGE_LOADER', false);

      }
    );
  }

}
