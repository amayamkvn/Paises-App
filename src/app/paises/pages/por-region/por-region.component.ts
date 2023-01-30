import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { CountryV2 } from '../../interfaces/paisV2.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC',];
  regionActiva: string = '';
  paisesRegion: CountryV2[] = [];

  activarRegion( region: string ){
    this.regionActiva = region;
  }

  buscarRegion( region: string ){
    this._paisesService.getPaisesRegion( region )
    .subscribe( resp => {
      console.log(resp);
      this.paisesRegion = resp;
    })
  }

  constructor( private _paisesService: PaisService ){}

}
