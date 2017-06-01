import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { VideoList } from "app/models/video-list.model";
import { YoutubeService } from "app/services/youtube.service";
import { Router } from "@angular/router";
import { PubSubService } from "app/services/pub-sub.service";

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {
  @Input() id: string;
  related: VideoList;
  constructor(
    private yt: YoutubeService,
    private router: Router,
    private pubsub: PubSubService

  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Cambiamento = ", changes);
    if (changes.id) {
      this.getRelated(this.id);
    }
  }

  getRelated(id) {
    this.pubsub.notify('SHOW_PAGE_LOADER', true);

    console.log(`Get related per video ${id}`);
    this.yt.related(id).subscribe(
      (r) => {
        this.related = r;
        this.pubsub.notify('SHOW_PAGE_LOADER', false);
      }
    );
  }
  watchVideo(id) {
    this.router.navigate(['watch', id]);
  }

}
