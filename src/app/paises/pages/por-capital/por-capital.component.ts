import { Component } from '@angular/core';
import { Cities } from '../../interfaces/ciudades.interface';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  existsError: boolean = false;
  ciudades: Cities[] = [];

  constructor( private _paisService: PaisService ){}

  buscar( termino: string ){
    this.existsError = false;
    this.termino = termino;
    console.log(this.termino);

    this._paisService.buscarCiudad( this.termino )
    .subscribe( (ciudades) => {
      console.log( ciudades );
      this.ciudades = ciudades;

    },( err ) => {
      this.existsError = true;
      this.ciudades = [];
    });

  }

  sugerencias( termino: string ){
    this.existsError = false;
    //TO DO: crear sugerencias
  }

  
}
