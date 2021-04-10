import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { finalize, take } from "rxjs/operators";
import { ConexaoFacade } from "src/app/core/facades/conexao.facade";
import { ToastHelper } from "src/app/shared/helpers/toast.helper";

@Component({
  selector: "app-sem-conexao",
  templateUrl: "./sem-conexao.page.html",
  styleUrls: ["./sem-conexao.page.scss"],
})
export class SemConexaoPage implements OnInit {
  botaoHabilitado = true;
  spinnerVisivel = false;

  constructor(
    private conexaoFacade: ConexaoFacade,
    private router: Router,
    private toast: ToastHelper
  ) {}

  ngOnInit() {}

  tentarNovamente() {
    this.botaoHabilitado = false;
    this.spinnerVisivel = true;

    this.conexaoFacade
      .testar()
      .pipe(
        finalize(() => {
          this.botaoHabilitado = true;
          this.spinnerVisivel = false;
        }),
        take(1)
      )
      .subscribe(
        () => this.router.navigate(["/"]),
        () => this.toast.exibir("Sem conexão!")
      );
  }
}
