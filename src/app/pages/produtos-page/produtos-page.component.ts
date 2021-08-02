import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-page',
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.scss']
})
export class ProdutosPageComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  searchSelected: 'nome' | 'atividade' = 'nome'

  pesquisa = '';

  produtos$ = this.produtoService.getProdutos();

  pesquisarProduto() {
    this.produtos$ = this.produtoService.getProdutos('', this.pesquisa, this.searchSelected);
  }

  ngOnInit(): void {
  }

}
