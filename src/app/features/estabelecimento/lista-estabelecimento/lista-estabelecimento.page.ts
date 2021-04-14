import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { Router } from "@angular/router";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { EstabelecimentoFacade } from "src/app/core/facades/estabelecimento.facade";
import { EstabelecimentoStorageService } from "src/app/core/services/storage/estabelecimento-storage.service";
import { take } from "rxjs/operators";
import { LocalizacaoStorageService } from "src/app/core/services/storage/localizacao-storage.service";

@Component({
  selector: "app-lista-estabelecimento",
  templateUrl: "./lista-estabelecimento.page.html",
  styleUrls: ["./lista-estabelecimento.page.scss"],
})
export class ListaEstabelecimentoPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScrollView: IonInfiniteScroll;

  private estabelecimentosBuscados: Array<EstabelecimentoDTO> = [];
  estabelecimentos: Array<EstabelecimentoDTO> = [];
  start = 0;
  reActiveInfinite: any;

  constructor(
    private router: Router,
    private estabelecimentoFacade: EstabelecimentoFacade,
    private estabelecimentoService: EstabelecimentoStorageService,
    private localizacaoStorage: LocalizacaoStorageService
  ) {}

  ngOnInit() {
    this.adquirirEstabelecimentos();
  }

  onClick(estabelecimentoDTO: EstabelecimentoDTO) {
    this.estabelecimentoFacade
      .adquirirPorCodigo(estabelecimentoDTO.codigoEstabelecimento)
      .pipe(take(1))
      .subscribe((estabelecimentoSalvar) => {
        this.estabelecimentoService.definir(estabelecimentoSalvar);
        this.router.navigate(["/identificacao-mesa"]);
      });
  }

  adquirirEstabelecimentos() {
    const localizacao = this.localizacaoStorage.localizacaoDTO;

    this.estabelecimentoFacade
      .adquirirPorLocalizacao(localizacao.cidade, localizacao.estado)
      .pipe(take(1))
      .subscribe((estabelecimentos) => {
        this.estabelecimentos = estabelecimentos;
        this.estabelecimentosBuscados = estabelecimentos;
      });
  }

  filtrar(pesquisa: any) {
    this.estabelecimentos = this.estabelecimentosBuscados.filter(
      (estabelecimento) =>
        estabelecimento.nome
          .toLowerCase()
          .includes(pesquisa.target.value.toLowerCase())
    );
  }

  scrollInfinito(infiniteScroll) {
    this.reActiveInfinite = infiniteScroll;

    this.start += 20;
    setTimeout(() => {
      this.infiniteScrollView.complete();
      this.adquirirEstabelecimentos();
      if (this.start > this.estabelecimentos.length) {
        infiniteScroll.enable(false);
      }
    }, 500);
  }
}
