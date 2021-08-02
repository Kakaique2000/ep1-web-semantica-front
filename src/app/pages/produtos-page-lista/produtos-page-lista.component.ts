import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { LojaPopupComponent } from 'src/app/components/loja-popup/loja-popup.component';
import { ADICIONAR_ITEM } from 'src/app/store/actions/carrinho';
import { ModelState } from 'src/app/store/models/model-state';
import { AppState, ProdutoCarrinho } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-produtos-page-lista',
  templateUrl: './produtos-page-lista.component.html',
  styleUrls: ['./produtos-page-lista.component.scss']
})
export class ProdutosPageListaComponent implements OnInit {

  constructor(private store: Store<{ app: AppState }>, private dialog: MatDialog) { }

  @Input()
  produtos$: Observable<ModelState<Produto[]>> = of(new ModelState(false));

  ngOnInit(): void {
  }

  adicionarCarrinho(produto: Produto) {
    this.store.dispatch(ADICIONAR_ITEM({ payload: produto }))
  }

  abrirLojaPopup(produto: ProdutoCarrinho) {

      this.dialog.open(LojaPopupComponent, {
        height: '800px',
        width: '1000px',
        data: {
          loja: {
            atividade: produto.lojaAtividade,
            nome: produto.lojaLabel,
            uri: produto.loja,
          },
        }
      })
  }

}

export interface Produto {
  nome:          string;
  loja:          string;
  lojaLabel:     string;
  lojaAtividade: string;
  uri:           string;
  fotoUrl:       string;
  codigo:        number;
  preco:         number;
  qtd:           number;
}

