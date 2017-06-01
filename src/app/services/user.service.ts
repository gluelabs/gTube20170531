import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { State, LOGIN, LOGOUT } from "app/reducer/user.reducer";

@Injectable()
export class UserService {

  private user: {
    logged: boolean,
    level: string,
  };

  constructor(
    private store: Store<State>
  ) {
    this.user = {
      logged: false,
      level: "NONE"
    };
  }

  login(level) {
    this.user.logged = true;
    this.user.level = level;
    this.store.dispatch({ type: LOGIN, payload: { role: "ADMIN" } });
  }

  logout() {
    this.user.logged = false;
    this.user.level = "NONE";
    this.store.dispatch({ type: LOGOUT, payload: { role: "NONE" } });
  }
  isLogged() {
    return this.user.logged;
  }
  getLevel() {
    return this.user.level;
  }


}
