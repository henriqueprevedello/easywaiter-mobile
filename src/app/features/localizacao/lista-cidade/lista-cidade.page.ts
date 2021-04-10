import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { Router } from "@angular/router";
import { LocalizacaoDTO } from "src/app/models/localizacao.dto";
import { EstabelecimentoFacade } from "src/app/core/facades/estabelecimento.facade";
import { LocalizacaoStorageService } from "src/app/core/services/storage/localizacao-storage.service";

@Component({
  selector: "app-lista-cidade",
  templateUrl: "./lista-cidade.page.html",
  styleUrls: ["./lista-cidade.page.scss"],
})
export class ListaCidadePage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScrollView: IonInfiniteScroll;

  localizacoes: Array<LocalizacaoDTO> = [];
  localizacoesBuscadas: Array<LocalizacaoDTO> = [];
  start = 0;
  reActiveInfinite: any;

  constructor(
    private router: Router,
    private estabelecimentoFacade: EstabelecimentoFacade,
    private localizacaoStorage: LocalizacaoStorageService
  ) {}

  ngOnInit() {
    this.adquirirCidades();
  }

  onClick(localizacaoDTO: LocalizacaoDTO) {
    this.localizacaoStorage.definir(localizacaoDTO);

    this.router.navigate(["/lista-estabelecimento"]);
  }

  adquirirCidades() {
    this.estabelecimentoFacade
      .adquirirLocalizacoes()
      .subscribe((localizacoes) => {
        this.localizacoes = localizacoes;
        this.localizacoesBuscadas = localizacoes;
      });
  }

  filtrar(pesquisa: any) {
    this.localizacoes = this.localizacoesBuscadas.filter((localizacao) =>
      localizacao.cidade
        .toLowerCase()
        .includes(pesquisa.target.value.toLowerCase())
    );
  }

  scrollInfinito(infiniteScroll) {
    this.reActiveInfinite = infiniteScroll;

    this.start += 20;
    setTimeout(() => {
      this.infiniteScrollView.complete();
      this.adquirirCidades();
      if (this.start > this.localizacoes.length) {
        infiniteScroll.enable(false);
      }
    }, 500);
  }
}
