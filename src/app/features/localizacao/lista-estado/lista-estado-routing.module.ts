import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaEstadoPage } from './lista-estado.page';

const routes: Routes = [
  {
    path: '',
    component: ListaEstadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaEstadoPageRoutingModule {}
