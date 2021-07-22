import { AotCompiler } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Produto } from 'src/app/pages/produtos-page-lista/produtos-page-lista.component';
import { ATUALIZAR_ITEM, REMOVER_ITEM } from 'src/app/store/actions/carrinho';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  constructor(public store: Store<{ app: AppState }>) { }

  mostrarCarrinho = true;

  itens$ = this.store.select(({ app }) => app.carrinho);

  precoTotal$ = this.itens$.pipe(
    map(carrinho => carrinho.reduce((acc, curr) => acc+= (curr.quantidade ?? 1)*curr.preco , 0))
  )

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


}
