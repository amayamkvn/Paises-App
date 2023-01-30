import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { CountryV2 } from '../../interfaces/paisV2.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: CountryV2;

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private _paisService: PaisService
    ){}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => 
        this._paisService.getPaisId( id )),
        tap( console.log )
        )
    .subscribe( pais => this.pais = pais );

    // this.activatedRoute.params
    // .subscribe( ({ id }) => {
    //   console.log( id );

    //   this._paisService.getPaisId( id )
    //   .subscribe( pais => {
    //     console.log(pais);
    //     this.pais = pais;
    //   })

    // });
  }

}
