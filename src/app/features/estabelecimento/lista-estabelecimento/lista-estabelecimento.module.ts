import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEstabelecimentoPageRoutingModule } from './lista-estabelecimento-routing.module';

import { ListaEstabelecimentoPage } from './lista-estabelecimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEstabelecimentoPageRoutingModule
  ],
  declarations: [ListaEstabelecimentoPage]
})
export class ListaEstabelecimentoPageModule {}
