import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizi-vari',
  templateUrl: './esercizi-vari.component.html',
  styleUrls: ['./esercizi-vari.component.css']
})
export class EserciziVariComponent implements OnInit {
  title: string;
  img: { url: string, name: string };

  constructor() {
    this.title = "Questo è il mio titolo di esercizio";
    this.img = {
      url: "https://glue-labs.com/wp-content/themes/2015/img/glue-labs.png",
      name: "logo"
    }
  }

  ngOnInit() {
  }

  clickListener(){
    console.log(`Hai cliccato l'immagine ${this.img.url}`);
  }

}
