import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { YoutubeService } from "app/services/youtube.service";
import { ToastsManager } from "ng2-toastr/ng2-toastr";
import { PubSubService } from "app/services/pub-sub.service";

@Component({
  selector: 'app-home',
  template: `
  <app-video-list [videoList]="videoList"></app-video-list>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoList: Array<any>;

  constructor(
    private yt: YoutubeService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef,
    public pubsub: PubSubService
  ) {
    this.toastr.setRootViewContainerRef(vcr);

    this.pubsub.notify('SHOW_PAGE_LOADER', true);
    this.yt.trending().subscribe(
      (r) => {
        console.log("Risposta http = ", r);
        this.videoList = r;
        this.pubsub.notify('SHOW_PAGE_LOADER', false);
      }
    );
  }





  ngOnInit() {
  }

}
