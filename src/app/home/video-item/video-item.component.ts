import { Component, OnInit, Input } from '@angular/core';
import { QueueService } from "app/services/queue.service";
import { Video } from "app/models/video.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
})
export class VideoItemComponent implements OnInit {
  @Input() video:Video;

  constructor(
    private queue: QueueService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  likeListenr() {
    console.log('Sono un videoiteme e hai premuto il mio like');
  }
  likeListenr2 = () => {
    console.log('Sono un videoiteme e hai premuto il mio like');
  }
  watchLaterListener(){
    console.log(`Son il videoitem ${this.video.id} e hanno cliccato watch later`);
    this.queue.set(this.video.id);
  }

  goToVideo(){
    console.log(`Go to Video ${this.video.id}`);
    this.router.navigate(['watch',this.video.id],{queryParams:{test:23}});
    //this.router.
  }



}
