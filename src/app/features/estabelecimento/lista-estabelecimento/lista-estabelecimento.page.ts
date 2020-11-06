import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { EstabelecimentoFacade } from "src/app/core/facades/estabelecimento.facade";
import { EstabelecimentoService } from "src/app/core/services/estabelecimento.service";
import { finalize, switchMap } from "rxjs/operators";

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
    private route: ActivatedRoute,
    private estabelecimentoFacade: EstabelecimentoFacade,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  ngOnInit() {
    // TODO validar se no localstorage tem cidade ou se no this.route.snapshot.paramMap.get("cidade")....

    this.adquirirEstabelecimentos();
  }

  onClick(estabelecimentoDTO: EstabelecimentoDTO) {
    this.estabelecimentoService.definir(estabelecimentoDTO);
    this.router.navigate(["/identificacao-mesa"]);
  }

  adquirirEstabelecimentos() {
    this.estabelecimentoFacade
      .adquirirPorLocalizacao(
        this.route.snapshot.paramMap.get("cidade"),
        this.route.snapshot.paramMap.get("estado")
      )
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
