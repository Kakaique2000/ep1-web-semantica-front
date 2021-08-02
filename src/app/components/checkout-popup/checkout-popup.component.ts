import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-checkout-popup',
  templateUrl: './checkout-popup.component.html',
  styleUrls: ['./checkout-popup.component.scss']
})
export class CheckoutPopupComponent implements OnInit {

  constructor(private store: Store<{ app: AppState }>) { }

  itens$ = this.store.select(({ app }) => app.carrinho);

  precoTotal$ = this.itens$.pipe(
    map(carrinho => carrinho.reduce((acc, curr) => acc+= (curr.quantidade ?? 1)*curr.preco , 0))
  )

  ngOnInit(): void {
  }

}
