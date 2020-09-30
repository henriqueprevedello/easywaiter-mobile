import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ItemPedidoModalPageRoutingModule } from "./item-pedido-modal-routing.module";

import { ItemPedidoModalPage } from "./item-pedido-modal.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPedidoModalPageRoutingModule,
  ],
  declarations: [ItemPedidoModalPage],
})
export class ItemPedidoModalPageModule {}
