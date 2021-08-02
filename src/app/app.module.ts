import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LojasPageComponent } from './pages/lojas-page/lojas-page.component';
import { LojasPageListaComponent } from './pages/lojas-page/lojas-page-lista/lojas-page-lista.component';
import { ProdutosPageComponent } from './pages/produtos-page/produtos-page.component';
import { ProdutosPageListaComponent } from './pages/produtos-page-lista/produtos-page-lista.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { appReducer } from './store/state/app-state';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LojaPopupComponent } from './components/loja-popup/loja-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import { CheckoutPopupComponent } from './components/checkout-popup/checkout-popup.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ToolbarComponent,
    LojasPageComponent,
    LojasPageListaComponent,
    ProdutosPageComponent,
    ProdutosPageListaComponent,
    CarrinhoComponent,
    LojaPopupComponent,
    CheckoutPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
