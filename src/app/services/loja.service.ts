import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Loja } from '../pages/lojas-page/lojas-page-lista/lojas-page-lista.component';
import { getModelStateObservable, ModelState } from '../store/models/model-state';
import { environment as env } from "src/environments/environment";
import { query } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class LojaService {

  constructor(private http: HttpClient) {
  }

  getLojas(pesquisa = '', ordenar: 'nome' | 'atividade' = 'nome'): Observable<ModelState<Loja[]>> {
    return getModelStateObservable(
      this.http.get<Loja[]>(`${env.api}/lojas`, { params: { pesquisa, ordenar } })
        .pipe(delay(1000))
    );
  }

}
