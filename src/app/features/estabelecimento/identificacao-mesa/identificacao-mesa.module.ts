import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentificacaoMesaPageRoutingModule } from './identificacao-mesa-routing.module';

import { IdentificacaoMesaPage } from './identificacao-mesa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdentificacaoMesaPageRoutingModule
  ],
  declarations: [IdentificacaoMesaPage]
})
export class IdentificacaoMesaPageModule {}
