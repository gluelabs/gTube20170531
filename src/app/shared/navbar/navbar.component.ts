import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "app/reducer/user.reducer";
import { Observable } from "rxjs/Rx";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  userObservable: Observable<any>;

  constructor(
    private store: Store<State>,
    private userService: UserService
  ) {
    this.store.select('user').subscribe(
      (r) => {
        this.user = r;
      }
    );

  }

  ngOnInit() {
  }
  doLogout(){
    this.userService.logout()
  }

}
