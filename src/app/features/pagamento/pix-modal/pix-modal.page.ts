import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ToastHelper } from "src/app/shared/helpers/toast.helper";

@Component({
  selector: "app-pix-modal",
  templateUrl: "./pix-modal.page.html",
  styleUrls: ["./pix-modal.page.scss"],
})
export class PixModalPage implements OnInit {
  @Input() chavePix: string;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private toastHelper: ToastHelper
  ) {}

  ngOnInit() {}

  copiarChavePix() {
    // TODO copiar valor para o clipboard do dispositivo

    this.toastHelper.exibir("Chave PIX copiada com sucesso!");

    this.modalController.dismiss();

    this.router.navigate(["/aguarde-pagamento"]);
  }

  cancelar(){
    this.modalController.dismiss();
  }
}
