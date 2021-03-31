import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { take } from "rxjs/operators";
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
    private router: Router,
    private pedidoFacade: PedidoFacade
  ) {
    this.pedidoFacade
      .adquirir(+this.route.snapshot.paramMap.get("codigoPedido"))
      .pipe(take(1))
      .subscribe((pedido: PedidoDTO) => (this.pedido = pedido));
  }

  ngOnInit() {}

  voltarPagina() {
    this.router.navigate(["/pedidos"]);
  }
}
