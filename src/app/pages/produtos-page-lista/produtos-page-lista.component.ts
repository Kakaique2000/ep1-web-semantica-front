import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ADICIONAR_ITEM } from 'src/app/store/actions/carrinho';
import { ModelState } from 'src/app/store/models/model-state';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-produtos-page-lista',
  templateUrl: './produtos-page-lista.component.html',
  styleUrls: ['./produtos-page-lista.component.scss']
})
export class ProdutosPageListaComponent implements OnInit {

  constructor(private store: Store<{ app: AppState }>) { }

  @Input()
  produtos$: Observable<ModelState<Produto[]>> = of(new ModelState(false));

  ngOnInit(): void {
  }

  adicionarCarrinho(produto: Produto) {
    this.store.dispatch(ADICIONAR_ITEM({ payload: produto }))
  }

}

export interface Produto {
  categoria: string;
  nome: string;
  uri: string;
  preco: number;
  fotoUrl: string;
  descricao: string;
}
