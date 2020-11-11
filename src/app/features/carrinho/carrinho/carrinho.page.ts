import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CarrinhoItem } from "src/app/models/carrinho-item";
import { Router } from "@angular/router";
import { CarrinhoService } from "src/app/core/services/carrinho.service";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.page.html",
  styleUrls: ["./carrinho.page.scss"],
})
export class CarrinhoPage implements OnInit {
  carrinho: Array<CarrinhoItem> = [];

  constructor(
    private storageService: CarrinhoService,
    private modalController: ModalController,
    private router: Router
  ) {
    this.carrinho = this.storageService.adquirir();
  }

  ngOnInit() {}

  adicionar(carrinhoItem: CarrinhoItem) {
    this.storageService.adicionar(carrinhoItem);
  }

  get quantidadeTotal(): number {
    return this.carrinho.reduce((prev, atual) => prev + atual.quantidade, 0);
  }

  get valorTotal() {
    return this.carrinho.reduce(
      (i, j) => i + j.produto.valor * j.quantidade,
      0
    );
  }

  close() {
    this.modalController.dismiss();
  }

  voltarPagina() {
    this.router.navigate(["/estabelecimento"]);
  }

  limparCarrinho() {
    this.storageService.limpar();
    this.carrinho = [];
  }

  realizarPedido() {
    this.router.navigate(["pedidos"]);
  }
}
