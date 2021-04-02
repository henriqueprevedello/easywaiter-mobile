import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AguardePagamentoPage } from './aguarde-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: AguardePagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AguardePagamentoPageRoutingModule {}
