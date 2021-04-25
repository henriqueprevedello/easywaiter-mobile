import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import {  take } from "rxjs/operators";
import { ComandaFacade } from "src/app/core/facades/comanda.facade";
import { ComandaStorageService } from "src/app/core/services/storage/comanda-storage.service";
import { EstabelecimentoStorageService } from "src/app/core/services/storage/estabelecimento-storage.service";
import { ComandaClienteDTO } from "src/app/models/comanda.dto";
import { PixModalPage } from "../pagamento/pix-modal/pix-modal.page";

@Component({
  selector: "app-comanda",
  templateUrl: "./comanda.page.html",
  styleUrls: ["./comanda.page.scss"],
})
export class ComandaPage implements OnInit {
  comanda: ComandaClienteDTO;
  possuiChavePix = false;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private comandaStorage: ComandaStorageService,
    private comandaFacade: ComandaFacade,
    private estabelecimentoStorage: EstabelecimentoStorageService
  ) {}

  ngOnInit() {
    this.comanda = this.comandaStorage.comandaDTO;
    this.possuiChavePix = this.estabelecimentoStorage.estabelecimento.chavePix.length > 0;
  }

  voltarPagina() {
    this.router.navigate(["/pedidos"]);
  }

  pagar() {
    this.router.navigate(["/aguarde-pagamento"]);

    this.comandaFacade.pagar().pipe(take(1)).subscribe();
  }

  async pagarPix(): Promise<any> {
    const modal = await this.modalController.create({
      component: PixModalPage,
      cssClass: "modal-informativa",
      componentProps: { chavePix: "Chave PIX Exemplo" },
    });

    modal.onDidDismiss().then((aguardarPagamento) => {
      if (aguardarPagamento.data) {
        this.pagar();
      }
    });

    return await modal.present();
  }
}
