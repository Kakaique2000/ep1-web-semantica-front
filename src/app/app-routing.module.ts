import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LojasPageComponent } from './pages/lojas-page/lojas-page.component';
import { MinhasComprasComponent } from './pages/minhas-compras/minhas-compras.component';
import { ProdutosPageComponent } from './pages/produtos-page/produtos-page.component';

const routes: Routes = [
  {
    path: 'lojas',
    component: LojasPageComponent
  },
  {
    path: 'produtos',
    component: ProdutosPageComponent
  },
  {
    path: 'compras',
    component: MinhasComprasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
