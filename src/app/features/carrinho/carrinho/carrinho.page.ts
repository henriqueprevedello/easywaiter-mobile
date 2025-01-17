import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PedidoItemDTO } from "src/app/models/pedido-item.dto";
import { Router } from "@angular/router";
import { CarrinhoStorageService } from "src/app/core/services/storage/carrinho-storage.service";
import { PedidoFacade } from "src/app/core/facades/pedido.facade";
import { PedidoDTO } from "src/app/models/pedido.dto";
import { EstabelecimentoStorageService } from "src/app/core/services/storage/estabelecimento-storage.service";
import { switchMap, take } from "rxjs/operators";
import { ComandaFacade } from "src/app/core/facades/comanda.facade";

@Component({
  selector: "app-carrinho",
  templateUrl: "./carrinho.page.html",
  styleUrls: ["./carrinho.page.scss"],
})
export class CarrinhoPage implements OnInit {
  carrinho: Array<PedidoItemDTO> = [];

  constructor(
    private carrinhoService: CarrinhoStorageService,
    private estabelecimentoService: EstabelecimentoStorageService,
    private modalController: ModalController,
    private comandaFacade: ComandaFacade,
    private router: Router,
    private pedidoFacade: PedidoFacade
  ) {
    
  }

  ngOnInit() {
    this.carrinho = this.carrinhoService.adquirir();
  }

  adicionar(pedidoItemDTO: PedidoItemDTO) {
    this.carrinhoService.adicionar(pedidoItemDTO);
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
    this.carrinhoService.limpar();
    this.carrinho = [];
  }

  realizarPedido() {
    const pedidoDTO: PedidoDTO = {
      pedidoItens: this.carrinhoService.adquirir(),
      codigoEstabelecimento:
        this.estabelecimentoService.estabelecimento.codigoEstabelecimento,
      codigoMesa: this.estabelecimentoService.mesa.id,
    };

    this.pedidoFacade
      .adicionar(pedidoDTO)
      .pipe(
        switchMap(() => this.comandaFacade.adquirirAberta()),
        take(1)
      )
      .subscribe((codigoPedido) => {
        this.limparCarrinho();
        this.router.navigate(["/pedidos", { codigoPedido }]);
      });
  }
}
