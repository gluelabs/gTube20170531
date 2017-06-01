import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  template: `
  <button class="btn btn-success" (click)="likeClick()">
    <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
 @Output() like = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  likeClick(){
    console.log('Sono nel like, permuto!!!')
    this.like.emit();
  }

}
