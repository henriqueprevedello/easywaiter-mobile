import { Component, OnInit } from "@angular/core";
import { CarrinhoItem } from "src/app/models/carrinho-item";
import { Router } from "@angular/router";
import { CarrinhoService } from "src/app/core/services/carrinho.service";
import { ModalController } from "@ionic/angular";
import { ItemPedidoModalPage } from "../item-pedido-modal/item-pedido-modal.page";
import { ProdutoDTO } from "src/app/models/produto.dto";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { EstabelecimentoService } from "src/app/core/services/estabelecimento.service";

@Component({
  selector: "app-estabelecimento",
  templateUrl: "./estabelecimento.page.html",
  styleUrls: ["./estabelecimento.page.scss"],
})
export class EstabelecimentoPage implements OnInit {
  estabelecimento: EstabelecimentoDTO;
  carrinho: Array<CarrinhoItem> = [];
  quantidadeItens: number;

  constructor(
    private storageService: CarrinhoService,
    private modalController: ModalController,
    private router: Router,
    private estabelecimentoService: EstabelecimentoService
  ) {
    this.quantidadeItens = storageService.quantidade;
  }

  ngOnInit() {
    this.router.events.subscribe(
      () => (this.quantidadeItens = this.storageService.quantidade)
    );
    this.estabelecimento = this.estabelecimentoService.estabelecimentoAtualDTO;

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
