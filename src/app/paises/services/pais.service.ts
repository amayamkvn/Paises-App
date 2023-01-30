import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
import { Cities } from '../interfaces/ciudades.interface';
import { CountryV2 } from '../interfaces/paisV2.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private api_url: string = 'https://restcountries.com/v3.1';
  private api_urlV2: string = 'https://restcountries.com/v2';
  private fields: string = 'fields=name,capital,flag,population';

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,capital,flag,alpha2Code,population' );
  }

  constructor( private _http: HttpClient ) { }

  buscarPais( termino: String ): Observable<CountryV2[]> {

    const url = `${this.api_urlV2}/name/${termino}`;
    return this._http.get<CountryV2[]>( url );
    // .pipe(
    //   catchError( err => of([]) )
    // );
  }

  buscarCiudad( termino: String ): Observable<Cities[]> {

    const url = `${this.api_urlV2}/capital/${termino}`;
    return this._http.get<Cities[]>( url, {params: this.httpParams} );
    // .pipe(
    //   catchError( err => of([]) )
    // );
  }

  getPaisId( termino: String ): Observable<CountryV2> {

    const url = `${this.api_urlV2}/alpha/${termino}`;
    return this._http.get<CountryV2>( url );
    // .pipe(
    //   catchError( err => of([]) )
    // );
  }

  getPaisesRegion( termino: string ): Observable<CountryV2[]> {
    const url =`${this.api_urlV2}/regionalbloc/${termino}?`;
    return this._http.get<CountryV2[]>( url, {params: this.httpParams} );
  }

  getPaises( termino: string ): Observable<CountryV2[]> {
    const url =`${this.api_urlV2}/name/${termino}`;
    return this._http.get<CountryV2[]>( url, {params: this.httpParams} )
    .pipe(
      tap(console.log)
    )
  }

}
