import { Injectable } from '@angular/core';

@Injectable()
export class QueueService {
  private _queue: Array<string>;

  constructor() { 
      this._queue = [];
  }

  hello(){
    console.log("Hello word");
  }

  set(id:string):void{
    this._queue.push(id);
    console.log(this._queue);
  }
  getAll():Array<any>{
    return this._queue;
  }


}
