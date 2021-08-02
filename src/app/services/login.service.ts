import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { catchError, delay, map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SET_LOGIN } from '../store/actions/login';
import { AppState } from '../store/state/app-state';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private store: Store<{ app: AppState }>) { }

  private _isLogging$ = new BehaviorSubject<boolean>(false);

  get isLogging$() {
    return this._isLogging$.asObservable();
  }

  doLogin(email: string, password: string) {
    this._isLogging$.next(true);
    return this.http.post<Cliente>(`${environment.api}/login`, {
      email,
      password
    })
      .pipe(
        take(1),
        delay(1000),
        map(({ token, nome }) => {
            this.store.dispatch(SET_LOGIN({
              payload: {
                nome,
                token,
                logado: true
              }
            }))
          return true;
        }),
        catchError(() => of(false)),
        tap(() => this._isLogging$.next(false))
    )
  }
}

export interface Cliente {
  nome: string;
  token: string;
}
