import { Component, OnInit, ViewChild } from "@angular/core";
import {  Router } from "@angular/router";
import { IonInfiniteScroll  } from "@ionic/angular";
import { EstabelecimentoStorageService } from "src/app/core/services/storage/estabelecimento-storage.service";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { MesaDTO } from "src/app/models/mesa.dto";

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
    private estabelecimentoStorage: EstabelecimentoStorageService
  ) {}

  ngOnInit() {
    this.estabelecimento = this.estabelecimentoStorage.estabelecimento;
  }

  onClick(mesaDTO: MesaDTO) {
    this.estabelecimentoStorage.definirMesa(mesaDTO);
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
