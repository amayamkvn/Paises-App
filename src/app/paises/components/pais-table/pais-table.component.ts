import { Component, Input } from '@angular/core';
import { PorPaisComponent } from '../../pages/por-pais/por-pais.component'
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { Cities } from '../../interfaces/ciudades.interface';
import { CountryV2 } from '../../interfaces/paisV2.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent {

  @Input()
  paises: CountryV2[] = [];

  constructor(){}

}
