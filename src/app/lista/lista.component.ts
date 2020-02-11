import { Component, OnInit } from '@angular/core';
import { Film } from '../modele/film';
import { FilmyService } from '../filmy.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  filmy: Film[];

  constructor( private fs: FilmyService) { }

  ngOnInit() {
    this.fs.wszystkieFilmy().subscribe(
      (dane) => {
        this.filmy = dane;
      },
      (error) => {
        console.log(error);
      }
    );
    console.table(this.filmy);
  }

}
