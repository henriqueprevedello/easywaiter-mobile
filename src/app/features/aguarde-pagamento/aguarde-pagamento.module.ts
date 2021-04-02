import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AguardePagamentoPageRoutingModule } from './aguarde-pagamento-routing.module';

import { AguardePagamentoPage } from './aguarde-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AguardePagamentoPageRoutingModule
  ],
  declarations: [AguardePagamentoPage]
})
export class AguardePagamentoPageModule {}
