import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Loja } from 'src/app/pages/lojas-page/lojas-page-lista/lojas-page-lista.component';
import { Produto } from 'src/app/pages/produtos-page-lista/produtos-page-lista.component';
import { ProdutoService } from 'src/app/services/produto.service';
import { ModelState } from 'src/app/store/models/model-state';

@Component({
  selector: 'app-loja-popup',
  templateUrl: './loja-popup.component.html',
  styleUrls: ['./loja-popup.component.scss']
})
export class LojaPopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {loja: Loja}, private produtosService: ProdutoService) { }

  produtos$: Observable<ModelState<Produto[]>> = this.produtosService.getProdutos(this.data.loja.uri.split('#').slice(-1)[0]);

  ngOnInit(): void {
  }

}
