import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CountryV2 } from '../../interfaces/paisV2.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  existsError: boolean = false;
  paises: CountryV2[] = [];
  paisesSugeridos: CountryV2[] = [];
  mostrarSugerencias: boolean = false;
  
  constructor( private _paisService: PaisService ){}

  buscar( termino: string ){
    this.mostrarSugerencias = true;
    this.existsError = false;
    this.termino = termino;
    console.log(this.termino);

    this._paisService.buscarPais( this.termino )
    .subscribe( (paises) => {
      console.log( paises );
      this.paises = paises;

    },( err ) => {
      this.existsError = true;
      this.paises = [];
    });

  }

  sugerencias( termino: string ){
    this.existsError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this._paisService.buscarPais( termino )
    .subscribe( paises => {
      this.paisesSugeridos = paises.splice(0,5);
    })
  }

  buscarSugerido( termino: string ){
    this.buscar( termino );
  }

}
