import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Video } from "app/models/video.model";
import { YoutubeService } from "app/services/youtube.service";
import { PubSubService } from "app/services/pub-sub.service";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  videoId: string;
  video: Video;
  constructor(
    private route: ActivatedRoute,
    private yt: YoutubeService,
  ) {
   
    this.route.params.subscribe(
      (r) => {
        console.log('I parametri di url sono: ', r);
        this.videoId = r.id;
      }
    );

  }

  ngOnInit() {
  }




}
