import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LojasPageComponent } from './pages/lojas-page/lojas-page.component';

const routes: Routes = [
  {
    path: 'lojas',
    component: LojasPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
