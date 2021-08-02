import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModelState } from 'src/app/store/models/model-state';
import { MatDialog } from '@angular/material/dialog';
import { LojaPopupComponent } from 'src/app/components/loja-popup/loja-popup.component';


@Component({
  selector: 'app-lojas-page-lista',
  templateUrl: './lojas-page-lista.component.html',
  styleUrls: ['./lojas-page-lista.component.scss']
})
export class LojasPageListaComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @Input()
  lojas$: Observable<ModelState<Loja[]>> = of(new ModelState(false));

  ngOnInit(): void {
  }

  abrirPopupLoja(loja: Loja) {
    console.log(loja);

    this.dialog.open(LojaPopupComponent, {
      height: '800px',
      width: '1000px',
      data: {
        loja,
      }
    })
  }

}

export interface Loja {
  atividade: string;
  nome: string;
  uri: string;
  fotoUrl?: string;
  descricao?: string;
}
