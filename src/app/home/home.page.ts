import { Component, AfterViewInit, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IonSlides } from "@ionic/angular";
import { take, tap } from "rxjs/operators";
import { ComandaFacade } from "../core/facades/comanda.facade";
import { ComandaStorageService } from "../core/services/storage/comanda-storage.service";
import { LocalizacaoStorageService } from "../core/services/storage/localizacao-storage.service";
import { ToastHelper } from "../shared/helpers/toast.helper";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild("slideWithNav", { static: false }) slideWithNav: IonSlides;

  ids: any;

  slideOptions = {
    initialSlide: 0,
    longSwipes: true,
    autoplay: {
      delay: 3200,
    },
  };

  constructor(
    private router: Router,
    private comandaFacade: ComandaFacade,
    private comandaStorage: ComandaStorageService,
    private toast: ToastHelper,
    private localizacaoStorage: LocalizacaoStorageService
  ) {
    this.ids = [
      {
        id: 195,
      },
      {
        id: 125,
      },
      {
        id: 240,
      },
      {
        id: 343,
      },
      {
        id: 444,
      },
    ];
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.comandaFacade
      .adquirirAberta()
      .pipe(
        tap((comandaAberta) => {
          if (comandaAberta) {
            this.comandaStorage.definir(comandaAberta);

            this.router.navigate(["/pedidos"]);

            return;
          }

          this.comandaStorage.limpar();
        }),
        take(1)
      )
      .subscribe();
  }

  clickIniciarPedido() {
    if(this.comandaStorage.comandaDTO){
      this.router.navigate(["/pedidos"]);

      return;
    }

    if (this.localizacaoStorage.localizacaoDTO) {
      this.router.navigate(["/lista-estabelecimento"]);

      return;
    }

    this.router.navigate(["/lista-cidade"]);
  }

  clickPromocoes() {
    this.toast.exibir("Em breve novidades...");
  }

  clickTrocarLocalizacao() {
    this.router.navigate(["/lista-cidade"]);
  }

  clickPerfil() {
    this.toast.exibir("Em breve novidades...");
  }
}
