import { AotCompiler } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Produto } from 'src/app/pages/produtos-page-lista/produtos-page-lista.component';
import { ATUALIZAR_ITEM, REMOVER_ITEM } from 'src/app/store/actions/carrinho';
import { AppState, ProdutoCarrinho } from 'src/app/store/state/app-state';
import { CheckoutPopupComponent } from '../checkout-popup/checkout-popup.component';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(public store: Store<{ app: AppState }>, private dialog: MatDialog) { }

  mostrarCarrinho = true;

  itens$ = this.store.select(({ app }) => app.carrinho);

  precoTotal$ = this.itens$.pipe(
    map(carrinho => carrinho.reduce((acc, curr) => acc+= (curr.quantidade ?? 1)*curr.preco , 0))
  )

  getQuantidadeTotal(itens: ProdutoCarrinho[]) {
    return itens.reduce((acc, cur) => acc += (cur.quantidade || 1), 0)
  }

  ngOnInit(): void {
  }

  removerItem({ uri }: Produto) {
    this.store.dispatch(REMOVER_ITEM({ payload: uri }))
  }

  atualizaItem(valor: number, { uri }: Produto) {
    if (valor === 0) {
      this.store.dispatch(REMOVER_ITEM({ payload: uri }))
      return;
    }
    this.store.dispatch(ATUALIZAR_ITEM({ payload: valor, id: uri }))
  }

  finalizarCompraClick() {
    this.dialog.open(CheckoutPopupComponent, {
      height: '600px',
      width: '600px',
    })
  }


}
