import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PixModalPage } from './pix-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PixModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PixModalPageRoutingModule {}
