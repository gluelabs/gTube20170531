import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { VideoList } from "app/models/video-list.model";
import { YoutubeService } from "app/services/youtube.service";
import { PubSubService } from "app/services/pub-sub.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() id: string;
  comments: Array<any>;
  constructor(
    private yt: YoutubeService,
    private pubsub: PubSubService

  ) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Cambiamento = ", changes);
    if (changes.id) {
      this.getComments(changes.id.currentValue);
    }
  }

  getComments(id) {
    this.pubsub.notify('SHOW_PAGE_LOADER', true);

    this.yt.getComments(id).subscribe(
      (r) => {
        this.comments = r;
        this.pubsub.notify('SHOW_PAGE_LOADER', false);

      }
    );
  }

}
