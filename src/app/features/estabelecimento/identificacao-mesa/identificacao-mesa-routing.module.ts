import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentificacaoMesaPage } from './identificacao-mesa.page';

const routes: Routes = [
  {
    path: '',
    component: IdentificacaoMesaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentificacaoMesaPageRoutingModule {}
