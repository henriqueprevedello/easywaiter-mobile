import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { PedidoFacade } from "src/app/core/facades/pedido.facade";
import { ListagemPedidoDTO } from "src/app/models/listagem-pedido.dto";
import { PedidoDTO } from "src/app/models/pedido.dto";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.page.html",
  styleUrls: ["./pedidos.page.scss"],
})
export class PedidosPage implements OnInit {
  pedidos: Array<ListagemPedidoDTO> = [];

  pedidosComStatusPendente = false;

  constructor(private router: Router, private pedidoFacade: PedidoFacade) {}

  ngOnInit() {
    this.pedidoFacade
      .adquirirTodos()
      .pipe(take(1))
      .subscribe((pedidos) => {
        this.pedidos = pedidos;
        // this.possuiPedidosComStatusPendente();
      });
  }

  private possuiPedidosComStatusPendente() {
    this.pedidosComStatusPendente =
      this.pedidos.filter((pedido) => [4, 2, 1].includes(pedido.codigoStatus))
        .length > 0;
  }

  voltarPagina() {
    this.router.navigate(["/estabelecimento"]);
  }

  finalizarComanda() {
    this.router.navigate(["/comanda"]);
  }

  exibirStatus(codigoStatus: number) {
    switch (codigoStatus) {
      case 0:
        return "CANCELADO";

      case 1:
        return "REALIZADO";

      case 2:
        return "CONFIRMADO";

      case 3:
        return "RECUSADO";

      case 4:
        return "EM_PREPARO";

      case 5:
        return "EM_ENTREGA";

      case 6:
        return "ENTREGUE";

      default:
        return "DESCONHECIDO";
    }
  }
}
