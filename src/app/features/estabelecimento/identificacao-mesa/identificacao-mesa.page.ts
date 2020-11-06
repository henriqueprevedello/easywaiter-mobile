import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonSelect, NavParams } from "@ionic/angular";
import { EstabelecimentoFacade } from "src/app/core/facades/estabelecimento.facade";
import { EstabelecimentoService } from "src/app/core/services/estabelecimento.service";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { MesaDTO } from "src/app/models/mesa.dto";
import { ToastHelper } from "src/app/shared/helpers/toast.helper";

@Component({
  selector: "app-identificacao-mesa",
  templateUrl: "./identificacao-mesa.page.html",
  styleUrls: ["./identificacao-mesa.page.scss"],
})
export class IdentificacaoMesaPage implements OnInit {
  @ViewChild(IonSelect) ionSelect: IonSelect;

  estabelecimento: EstabelecimentoDTO = {
    codigoEstabelecimento: 2,
    nome: "Estabelecimento 2",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    numeroTelefone: "(49) 99955-8989",
    cnpj: "11223344556677",
    estado: "SC",
    cidade: "Anchieta",
    categorias: [],
    mesas: [
      { id: 1, numero: 17, ocupado: false },
      { id: 2, numero: 51, ocupado: true },
      { id: 3, numero: 69, ocupado: false },
    ],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastHelper: ToastHelper,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  ngOnInit() {
    this.estabelecimento = this.estabelecimentoService.estabelecimentoAtualDTO;
  }

  confirmar() {
    if (this.ionSelect.value) {
      this.router.navigate(["/estabelecimento"]);

      return;
    }

    this.toastHelper.exibir("Selecione uma mesa!");
  }
}
