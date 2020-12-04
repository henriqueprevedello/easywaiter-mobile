import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PedidoFacade } from "src/app/core/facades/pedido.facade";
import { PedidoDTO } from "src/app/models/pedido.dto";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedido.page.html",
  styleUrls: ["./pedido.page.scss"],
})
export class PedidoPage implements OnInit {
  pedido: PedidoDTO;

  constructor(
    private route: ActivatedRoute,
    private pedidoFacade: PedidoFacade
  ) {
    debugger;
    const codigoPedido = this.route.snapshot.paramMap.get("codigoPedido");

    this.pedidoFacade.adquirir(+codigoPedido).subscribe((pedido: PedidoDTO) => {
      debugger;
      this.pedido = pedido;
    });
  }

  ngOnInit() {}
}
