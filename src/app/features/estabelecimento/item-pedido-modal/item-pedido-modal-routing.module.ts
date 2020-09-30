import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemPedidoModalPage } from './item-pedido-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ItemPedidoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemPedidoModalPageRoutingModule {}
