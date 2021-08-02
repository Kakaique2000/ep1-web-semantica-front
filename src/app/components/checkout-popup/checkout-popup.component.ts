import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/state/app-state';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-checkout-popup',
  templateUrl: './checkout-popup.component.html',
  styleUrls: ['./checkout-popup.component.scss']
})
export class CheckoutPopupComponent implements OnInit {

  constructor(
    private store: Store<{ app: AppState }>,
    private dialog: MatDialog,

  ) { }

  itens$ = this.store.select(({ app }) => app.carrinho);

  precoTotal$ = this.itens$.pipe(
    map(carrinho => carrinho.reduce((acc, curr) => acc+= (curr.quantidade ?? 1)*curr.preco , 0))
  )

  isLogado$ = this.store.select(({ app }) => app.login.logado);

  ngOnInit(): void {
  }

  abrirLoginPopup() {
    this.dialog.open(LoginComponent)
  }

}
