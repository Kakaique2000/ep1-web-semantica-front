import { Component, OnInit } from '@angular/core';
import { LojaService } from 'src/app/services/loja.service';

@Component({
  selector: 'app-lojas-page',
  templateUrl: './lojas-page.component.html',
  styleUrls: ['./lojas-page.component.scss']
})
export class LojasPageComponent implements OnInit {

  searchSelected: 'nome' | 'atividade' = 'nome'

  constructor(private lojaService: LojaService) { }

  lojas$ = this.lojaService.getLojasPorNome();

  ngOnInit(): void {
  }

}
