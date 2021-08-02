import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { LoginComponent } from '../components/login/login.component';
import { AppState } from '../store/state/app-state';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private store: Store<{ app: AppState }>) { }

  usuarioLogado$ = this.store.select('app').pipe(
    map(e => e.login)
  )

  ngOnInit(): void {
  }

  abrirLoginPopup() {
    this.dialog.open(LoginComponent)
  }

}
