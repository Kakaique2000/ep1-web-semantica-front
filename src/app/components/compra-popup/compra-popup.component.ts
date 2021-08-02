import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-popup',
  templateUrl: './compra-popup.component.html',
  styleUrls: ['./compra-popup.component.scss']
})
export class CompraPopupComponent implements OnInit {

  constructor() { }

  mostrarSucesso = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarSucesso = true
    }, 1000);
  }

}
