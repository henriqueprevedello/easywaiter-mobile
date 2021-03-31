import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemConexaoPage } from './sem-conexao.page';

const routes: Routes = [
  {
    path: '',
    component: SemConexaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemConexaoPageRoutingModule {}
