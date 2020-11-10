import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonInfiniteScroll, IonSelect, NavParams } from "@ionic/angular";
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
  @ViewChild(IonInfiniteScroll) infiniteScrollView: IonInfiniteScroll;
  start = 0;
  reActiveInfinite: any;
  estabelecimento: EstabelecimentoDTO;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastHelper: ToastHelper,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  ngOnInit() {
    this.estabelecimento = this.estabelecimentoService.estabelecimentoAtualDTO;
  }

  onClick(mesaDTO: MesaDTO) {
    this.estabelecimentoService.definirMesa(mesaDTO);
    this.router.navigate(["/estabelecimento"]);
  }

  scrollInfinito(infiniteScroll) {
    this.reActiveInfinite = infiniteScroll;

    this.start += 20;
    setTimeout(() => {
      this.infiniteScrollView.complete();
      if (this.start > this.estabelecimento.mesas.length) {
        infiniteScroll.enable(false);
      }
    }, 500);
  }
}
