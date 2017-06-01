import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { YoutubeService } from "app/services/youtube.service";

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
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
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;
  cities;
  user = {};
  name = "Antonio";
  constructor(
    private formBuilder: FormBuilder,
    private yt: YoutubeService) {

    this.cities = [
      { id: 1, name: "Los Angeles" },
      { id: 2, name: "New York" },
      { id: 3, name: "Black Rock City" },
      { id: 4, name: "Pamplona" },
      { id: 5, name: "Valencia" },
    ]
  }

  ngOnInit() {

    let anagraficaGroup = this.formBuilder.group({
      name: ['Antonio'],
      surname: ['Barbatelli']
    });

    this.myForm = this.formBuilder.group(
      {
        email: ['antonio@angular.ang', [Validators.required]],
        username: [
          'pippo',//Valore di default,
          [],//Validatori Sincroni
          [this.pippoValidator]//Validatori Asincroni
        ],
        password: ['miaPassword1', [Validators.required, this.hasNumber]],
        city: [3, [Validators.required]],
        anagrafica: anagraficaGroup
      }
    );

    this.myForm.controls.username.setValidators([Validators.required]);




    let myForm2 = this.formBuilder.group(

      {
        //'userData': this.formBuilder.group({
        username: [
          this.name,//Nome di default
          [Validators.required],//Validatori Sincroni
          [this.pippoValidator]//Validatori Asincroni
        ],
        email: ["", Validators.required]
        //})
        ,
        password: [
          '', [Validators.required, this.hasNumber]
        ]
      }

    );

    this.myForm.valueChanges.subscribe(
      (data) => console.log(data)
    );

    this.myForm.statusChanges.subscribe(
      (data) => console.log(`STATUS CHANGED - ${data}`)
    );

  }

  hasNumber(control: FormControl): { [s: string]: boolean } {
    let regex = /[0-9]/;
    if (regex.test(control.value)) {
      return null;
    }
    else {
      return { 'no-numbers': true };
    }
  }





  pippoValidator(control: FormControl): Promise<{ [s: string]: boolean }> {

    return new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (control.value === 'pippo') {
              resolve(null);
            }
            else {
              resolve({ 'no-pippo': true });
            }
          }, 150
        )
      }
    )
  }

  onFormSubmit() {
    console.log(this.myForm.value);
    this.yt.fakeSalvaUtente(this.myForm.value).subscribe(
      (r)=>{
        console.log('SUCCESSO',r);
      },
      (e)=>{
        console.log('ERRORE',e);
      },
    );

  }

  clearForm() {
    this.myForm.reset();
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    //this.subscription.unsubscribe();
  }

}
