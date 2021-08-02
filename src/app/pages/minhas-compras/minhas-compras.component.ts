import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { ProdutoService } from 'src/app/services/produto.service';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html',
  styleUrls: ['./minhas-compras.component.scss']
})
export class MinhasComprasComponent implements OnInit {

  constructor(private produtosService: ProdutoService, private store: Store<{ app: AppState }>) { }

  itemsComprados$ =
    this.store.select('app')
      .pipe(
        map(e => e.login.uri),
        switchMap(e => this.produtosService.getCompras(e)),
        map(e => ({...e, data: [...e.data || [], ...this.produtosService.produtosComprados] }))
      );

  ngOnInit(): void {
  }

}
