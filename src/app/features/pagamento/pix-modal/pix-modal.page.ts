import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { EstabelecimentoStorageService } from "src/app/core/services/storage/estabelecimento-storage.service";
import { ToastHelper } from "src/app/shared/helpers/toast.helper";
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: "app-pix-modal",
  templateUrl: "./pix-modal.page.html",
  styleUrls: ["./pix-modal.page.scss"],
})
export class PixModalPage implements OnInit {
  @Input() chavePix: string;

  constructor(
    private modalController: ModalController,
    private toastHelper: ToastHelper,
    private estabelecimentoStorage: EstabelecimentoStorageService,
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    this.chavePix = this.estabelecimentoStorage.estabelecimento.chavePix;
  }

  copiarChavePix() {
    this.clipboard.copy(this.chavePix);

    this.toastHelper.exibir("Chave PIX copiada com sucesso!");

    this.modalController.dismiss(true);
  }

  cancelar(){
    this.modalController.dismiss(false);
  }
}
