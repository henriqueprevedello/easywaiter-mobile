import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaEstadoPageRoutingModule } from './lista-estado-routing.module';

import { ListaEstadoPage } from './lista-estado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaEstadoPageRoutingModule
  ],
  declarations: [ListaEstadoPage]
})
export class ListaEstadoPageModule {}
