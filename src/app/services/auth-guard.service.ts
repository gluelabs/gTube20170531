import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "app/services/user.service";
import { Store } from "@ngrx/store";
import { State } from "app/reducer/user.reducer";

@Injectable()
export class AuthGuardService implements CanActivate {
  private reduxUser;
  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<State>,
  ) {
    this.store.select('user').subscribe(
      (r: any) => {
        this.reduxUser = r;
        if (!r.isLogged) {
          this.router.navigate(["login"]);
        }
      }
    );

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise(
      (success, reject) => {
        setTimeout(
          () => {
            let r = this.canNavigate(route.data.levels);
            if (!r) {
              this.router.navigate(["login"], { queryParams: { redirect: state.url } });
            }
            success(r);
          },
          1
        );
      });
  }

  canNavigate(permittedLevels: Array<any>): boolean {
    if(permittedLevels===undefined){
      console.error('***PER QUESTA ROTTA NON HAI CONFIGURATO I levels');
    }
    return this.reduxUser.isLogged && permittedLevels.indexOf(this.reduxUser.role) >= 0;
  }


}
