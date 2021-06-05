import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, timer } from "rxjs";
import { delay, repeat, take, takeWhile, tap } from "rxjs/operators";
import { PedidoFacade } from "src/app/core/facades/pedido.facade";
import { StatusPedidoService } from "src/app/core/services/status-pedido.service";
import { ListagemPedidoDTO } from "src/app/models/listagem-pedido.dto";
import { PedidoDTO } from "src/app/models/pedido.dto";
import { StatusPedidoEnum } from "src/app/shared/enumerators/status-pedido.enum";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.page.html",
  styleUrls: ["./pedidos.page.scss"],
})
export class PedidosPage implements OnInit {
  pedidos: Array<ListagemPedidoDTO> = [];

  private pedidosAnteriores: Array<ListagemPedidoDTO> = [];

  pedidosComStatusPendente = false;

  constructor(
    private router: Router,
    private pedidoFacade: PedidoFacade,
    private statusPedidoService: StatusPedidoService
  ) {}

  ngOnInit() {
    // TODO isso aqui nunca para
    this.atualizarPedidos();
  }

  private atualizarPedidos() {
    this.pedidoFacade
      .adquirirTodos()
      .pipe(take(1))
      .subscribe((pedidos) => {
        if (this.deveAtualizarOsPedidos(pedidos)) {
          this.pedidos = pedidos;
          this.pedidosAnteriores = pedidos;
          this.possuiPedidosComStatusPendente();
        }

        setTimeout(() => this.atualizarPedidos(), 1200);
      });
  }

  private deveAtualizarOsPedidos(novosPedidos: Array<ListagemPedidoDTO>) {
    return novosPedidos !== this.pedidosAnteriores;
  }

  private possuiPedidosComStatusPendente() {
    this.pedidosComStatusPendente =
      this.pedidos.filter((p) =>
        this.statusPedidoService.pedidoEstaEmAndamento(p.codigoStatus)
      ).length > 0;
  }

  voltarPagina() {
    this.router.navigate(["/estabelecimento"]);
  }

  finalizarComanda() {
    this.router.navigate(["/comanda"]);
  }

  exibirStatus(codigoStatus: number) {
    return this.statusPedidoService.exibirStatus(codigoStatus);
  }

  adquirirCorCard(codigoStatus: number): string {
    const cores = {
      [StatusPedidoEnum.RECUSADO]: "#ff5252",
      [StatusPedidoEnum.CANCELADO]: "#696969",
      [StatusPedidoEnum.REALIZADO]: "#5297ff",
      [StatusPedidoEnum.ENTREGUE]: "#44db71",
      [StatusPedidoEnum.CONFIRMADO]: "#ffa500",
      [StatusPedidoEnum.EM_ENTREGA]: "#ffa500",
      [StatusPedidoEnum.EM_PREPARO]: "#ffa500",
    };

    return cores[codigoStatus] || "white";
  }
}
