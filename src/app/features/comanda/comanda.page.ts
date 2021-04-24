import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { of } from "rxjs";
import { switchMap, take, tap } from "rxjs/operators";
import { ComandaFacade } from "src/app/core/facades/comanda.facade";
import { ComandaStorageService } from "src/app/core/services/storage/comanda-storage.service";
import { ComandaClienteDTO } from "src/app/models/comanda.dto";
import { PixModalPage } from "../pagamento/pix-modal/pix-modal.page";

@Component({
  selector: "app-comanda",
  templateUrl: "./comanda.page.html",
  styleUrls: ["./comanda.page.scss"],
})
export class ComandaPage implements OnInit {
  comanda: ComandaClienteDTO;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private comandaStorage: ComandaStorageService,
    private comandaFacade: ComandaFacade
  ) {}

  ngOnInit() {
    this.comanda = this.comandaStorage.comandaDTO;
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
