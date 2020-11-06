import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { IonTextarea, ModalController } from "@ionic/angular";
import { StorageService } from "src/app/core/services/storage.service";
import { ProdutoDTO } from "src/app/models/produto.dto";

@Component({
  selector: "app-item-pedido-modal",
  templateUrl: "./item-pedido-modal.page.html",
  styleUrls: ["./item-pedido-modal.page.scss"],
})
export class ItemPedidoModalPage implements OnInit {
  @ViewChild("observacao") observacao: IonTextarea;
  @Input() produto: ProdutoDTO;

  quantidade = 1;

  constructor(
    private storageService: StorageService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  onClickClose() {}

  diminuirQuantidade() {
    if (this.quantidade <= 1) {
      return;
    }
    this.quantidade--;
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  adicionarAoCarrinho() {
    this.storageService.add({
      produto: this.produto,
      observacao: this.observacao.value ? this.observacao.value : null,
      quantidade: this.quantidade,
    });
    this.modalController.dismiss();
  }

  cancelar() {
    this.modalController.dismiss();
  }
}
