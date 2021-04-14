import { Component, OnInit } from "@angular/core";
import { PedidoItemDTO } from "src/app/models/pedido-item.dto";
import { Router } from "@angular/router";
import { CarrinhoStorageService } from "src/app/core/services/storage/carrinho-storage.service";
import { ModalController } from "@ionic/angular";
import { ItemPedidoModalPage } from "../item-pedido-modal/item-pedido-modal.page";
import { ProdutoDTO } from "src/app/models/produto.dto";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { EstabelecimentoStorageService } from "src/app/core/services/storage/estabelecimento-storage.service";

@Component({
  selector: "app-estabelecimento",
  templateUrl: "./estabelecimento.page.html",
  styleUrls: ["./estabelecimento.page.scss"],
})
export class EstabelecimentoPage implements OnInit {
  estabelecimento: EstabelecimentoDTO;
  carrinho: Array<PedidoItemDTO> = [];
  quantidadeItens: number;

  constructor(
    private storageService: CarrinhoStorageService,
    private modalController: ModalController,
    private router: Router,
    private estabelecimentoService: EstabelecimentoStorageService
  ) {
    this.quantidadeItens = storageService.quantidade;
  }

  ngOnInit() {
    this.router.events.subscribe(
      () => (this.quantidadeItens = this.storageService.quantidade)
    );
    this.estabelecimento = this.estabelecimentoService.estabelecimento;

    this.carrinho = this.storageService.adquirir();

    this.quantidadeItens = this.storageService.quantidade;
  }

  async adicionarAoCarrinho(produto: ProdutoDTO): Promise<any> {
    const modal = await this.modalController.create({
      component: ItemPedidoModalPage,
      cssClass: "modal-padrao",
      componentProps: { produto: produto },
    });

    modal
      .onDidDismiss()
      .then(() => (this.quantidadeItens = this.storageService.quantidade));

    return await modal.present();
  }

  async abrirCarrinho() {
    this.router.navigate(["carrinho"]);
  }
}
