import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemConexaoPageRoutingModule } from './sem-conexao-routing.module';

import { SemConexaoPage } from './sem-conexao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemConexaoPageRoutingModule
  ],
  declarations: [SemConexaoPage]
})
export class SemConexaoPageModule {}
