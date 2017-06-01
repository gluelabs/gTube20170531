import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [`
        .ng-invalid {
            border-color: red;
            border-width: 2px;
        }
        .ng-valid {
            border-color: green;
            border-width: 2px;
        }
    `],
})
export class TemplateDrivenComponent implements OnInit {
  user;
  cities: Array<any>;
  constructor() {
    this.user = {
      "username": "AntonioBarbatelli",
      "password": "PasswordSegreta",
      "email": "antonio@angular.it",
      "city":"3"
    };
    this.cities = [
     {id:1,name: "Los Angeles"},
     {id:2,name: "New York"},
     {id:3,name: "Black Rock City"},
     {id:4,name: "Pamplona"},
     {id:5,name: "Valencia"},
    ]

  }

  ngOnInit() {
  }

  onFormSubmit(form) {
    console.log(form.value);
    console.log(this.user);
  }

  hasChanges() {
    return true;
  }

}
