import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { map, pluck } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import { AppState } from 'src/app/store/state/app-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public dialogRef: MatDialogRef<LoginComponent>, private store: Store<{ app: AppState }>) { }

  email = '';
  senha = '';

  isLogging$ = this.loginService.isLogging$;

  logado$ = this.store.select('app').pipe(
    map(e => e.login.logado))

  clienteLogado$ = this.store.select('app').pipe(
    map(e => e.login))


  login() {
    this.loginService.doLogin(this.email, this.senha)
      .subscribe({
        next: () => this.dialogRef.close()
      })
  }

  deslogar() {
    this.dialogRef.close();
    setTimeout(() => {
      this.loginService.deslogar();
    }, 500);
  }

  ngOnInit(): void {
  }

}
