import { Component, OnInit, Input } from '@angular/core';
import { VideoList } from "app/models/video-list.model";

@Component({
  selector: 'app-video-list',
  template: `
  <div class="row">
 
<app-video-item
class="col-sm-4"
*ngFor="let video of videoList?.items;"
[video]=video
>

</app-video-item>

 </div>
  `,
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() videoList: VideoList;

  constructor() { }

  ngOnInit() {
  }

}
