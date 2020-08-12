import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEstabelecimentoPage } from './lista-estabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEstabelecimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEstabelecimentoPageRoutingModule {}
