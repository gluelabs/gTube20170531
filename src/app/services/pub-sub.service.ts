import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PubSubService {
  streams: Array<EventEmitter<any>> = [];
  constructor() { }

  subscribe(topic: string, handler: Function) {
    console.log('SUBSCRIBE A ',topic);
    if (!this.streams[topic]) {
      this.streams[topic] = new EventEmitter<any>();
    }
    return this.streams[topic].subscribe(handler);
  }

  notify(topic: string, message: any) {+
   console.log('NOTIFY A ',topic);

    if (!this.streams[topic]) {
      this.streams[topic] = new EventEmitter<any>();
      console.log(`Topic ${topic} doesn't exist, creating it`);
    } 
    this.streams[topic].next(message);
  }
}
