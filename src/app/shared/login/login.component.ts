import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  redirect: string = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private user: UserService
  ) {
    route.queryParams.subscribe(
      (r) => {
        if (r.redirect) {
          this.redirect = r.redirect
        }
        console.log("queryParams = ", r);
      }
    );
  }
  ngOnInit() {
  }

  login(level) {
    this.user.login(level);
    if (this.redirect) {
      this.router.navigateByUrl(this.redirect);
    } else {
      this.router.navigate(['home']);
    }
  }

}
