import { Directive, TemplateRef, ViewContainerRef, Input, ViewRef, ElementRef } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "app/reducer/user.reducer";

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective {
  view: ViewRef;
  level: string;
  @Input() set showIfLogged(level: string) {
    console.log("Sono nell'input e dichiaro LEVEL = ",level);
      this.level = level;
    }

  constructor(
    private templateRef: TemplateRef<any>,
    private store: Store<State>,
    private viewContainer: ViewContainerRef,
  ) {
    this.store.select('user').subscribe(
      (r: any) => {
        if (r.isLogged) {
          console.log('LEVEL', this.level);
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
          console.log('LEVEL', this.level);

        }
      }
    );


  }


}
