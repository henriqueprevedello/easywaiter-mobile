import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCidadePage } from './lista-cidade.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCidadePageRoutingModule {}
