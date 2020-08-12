import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCidadePageRoutingModule } from './lista-cidade-routing.module';

import { ListaCidadePage } from './lista-cidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCidadePageRoutingModule
  ],
  declarations: [ListaCidadePage]
})
export class ListaCidadePageModule {}
