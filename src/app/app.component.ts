import { Component } from '@angular/core';
import { PubSubService } from "app/services/pub-sub.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoader: boolean = false;
  loadingCount = 0;

  constructor(
    private pubsub: PubSubService
  ) {
    this.pubsub.subscribe('SHOW_PAGE_LOADER',
      (r) => {
        this.logicaLoader(r);
      }
    );

  }

  logicaLoader(stato) {
    if (stato) {
      this.loadingCount++;
    } else {
      this.loadingCount--;
    }

    if (this.loadingCount == 0) {
      this.showLoader = false;
    } else {
      this.showLoader = true;
    }
    console.log('Numero di laoder in coda = ', this.loadingCount)
  }

  title = 'app works!';
}
