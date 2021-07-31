import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';

@Component({
  selector: 'app-lojas-page',
  templateUrl: './lojas-page.component.html',
  styleUrls: ['./lojas-page.component.scss']
})
export class LojasPageComponent implements OnInit {

  searchSelected: 'nome' | 'atividade' = 'nome'

  ultimaPesquisa = '';

  constructor(private lojaService: LojaService) { }

  lojas$ = this.lojaService.getLojas();

  pesquisarLoja(pesquisa: string) {
    this.ultimaPesquisa = pesquisa;
    this.lojas$ = this.lojaService.getLojas(pesquisa, this.searchSelected);
  }

  ordenarChange() {
    this.lojas$ = this.lojaService.getLojas(this.ultimaPesquisa, this.searchSelected);
  }



  ngOnInit(): void {
  }

}
