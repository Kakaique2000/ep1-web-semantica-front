import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Produto } from '../pages/produtos-page-lista/produtos-page-lista.component';
import { getModelStateObservable, ModelState } from '../store/models/model-state';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosComprados: Produto[] = [];

  constructor(private http: HttpClient) { }

  getProdutos(loja: string = '', pesquisa = '', tipo_pesquisa = ''): Observable<ModelState<Produto[]>> {
    return getModelStateObservable(this.http.get<Produto[]>(
      environment.api + '/produtos',
      {
        params: {
          loja,
          pesquisa,
          tipo_pesquisa
        }
      }
    ).pipe(delay(1000)))
  }

  getCompras(cliente: string) {
    return getModelStateObservable(this.http.post<Produto[]>(
      environment.api + '/compras', {
        cliente
      }
    ).pipe(delay(1000)))
  }

  fazerCompra(produtos: Produto[]) {
    this.produtosComprados.push(...produtos);
  }

}
