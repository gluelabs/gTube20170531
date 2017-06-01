import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-watch-later',
  template: '<button  class="btn btn-success" (click)="clicked()">Watch Later</button>',
})
export class WatchLaterComponent implements OnInit {
 @Output() wathcLater = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  clicked(){
    console.log("Sno il watch later");
    this.wathcLater.emit();
  }



}
