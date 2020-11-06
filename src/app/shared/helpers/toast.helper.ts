import {  Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
  })
export class ToastHelper {

  constructor(private toastController: ToastController) {}

  async exibir(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2400
    });

    toast.present();
  }

}