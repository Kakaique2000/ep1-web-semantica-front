import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModelState } from 'src/app/store/models/model-state';

@Component({
  selector: 'app-lojas-page-lista',
  templateUrl: './lojas-page-lista.component.html',
  styleUrls: ['./lojas-page-lista.component.scss']
})
export class LojasPageListaComponent implements OnInit {

  constructor() { }

  @Input()
  lojas$: Observable<ModelState<Loja[]>> = of(new ModelState(false));

  ngOnInit(): void {
  }

}

export interface Loja {
  atividade: string;
  nome: string;
  uri: string;
  fotoUrl?: string;
  descricao?: string;
}
