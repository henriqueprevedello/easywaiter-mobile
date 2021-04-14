import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";
import { ComandaFacade } from "src/app/core/facades/comanda.facade";
import { ComandaStorageService } from "src/app/core/services/storage/comanda-storage.service";
import { ToastHelper } from "src/app/shared/helpers/toast.helper";

@Component({
  selector: "app-aguarde-pagamento",
  templateUrl: "./aguarde-pagamento.page.html",
  styleUrls: ["./aguarde-pagamento.page.scss"],
})
export class AguardePagamentoPage implements OnInit {
  corFundo = "primary";
  mensagem = "Aguarde, confirmando pagamento";
  spinnerVisivel = true;

  constructor(
    private router: Router,
    private comandaFacade: ComandaFacade,
    private comandaStorageService: ComandaStorageService,
    private toastHelper: ToastHelper
  ) {}

  ngOnInit() {
    // TODO isso aqui nunca para
    this.verificarPagamentoRealizado();
  }

  private verificarPagamentoRealizado() {
    this.comandaFacade
      .pagamentoRealizado()
      .pipe(take(1))
      .subscribe((retorno) => {
        if (!retorno) {
          setTimeout(() => this.verificarPagamentoRealizado(), 1200);

          return;
        }
        
        this.corFundo = "success";
        this.mensagem = "Pagamento confirmado!";
        this.spinnerVisivel = false;

        this.comandaStorageService.limpar();
        this.toastHelper.exibir(
          "Comanda finalizada, obrigado pela preferência!"
        );

        setTimeout(() => this.router.navigate(["/home"]), 2000);
      });
  }
}
