import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CarrinhoItem } from "src/app/models/carrinho-item";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { StorageService } from "src/app/core/services/storage.service";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.page.html",
  styleUrls: ["./carrinho.page.scss"],
})
export class CarrinhoPage implements OnInit {
  carrinho: Array<CarrinhoItem> = [];

  constructor(
    private storageService: StorageService,
    private modalController: ModalController,
    private location: Location
  ) {}

  ngOnInit() {
    this.storageService.get().then((itens) => {debugger;this.carrinho = itens}).catch(aa=>{debugger;}).finally(()=>{debugger;});
  }

  adicionar(carrinhoItem: CarrinhoItem) {
    this.storageService.add(carrinhoItem);
  }

  getTotal() {
    return this.carrinho.reduce(
      (i, j) => i + j.produto.valor * j.quantidade,
      0
    );
  }

  close() {
    this.modalController.dismiss();
  }

  voltarPagina() {
    this.location.back();
  }

  limparCarrinho(){
    this.storageService.clear().then(itens => (this.carrinho = itens));
  }

  realizarPedido() {}
}
