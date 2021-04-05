import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PixModalPageRoutingModule } from './pix-modal-routing.module';

import { PixModalPage } from './pix-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PixModalPageRoutingModule,
    
  ],
  declarations: [PixModalPage]
})
export class PixModalPageModule {}
