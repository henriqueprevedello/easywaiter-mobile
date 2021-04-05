import { Component, AfterViewInit, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, take, tap } from "rxjs/operators";
import { ComandaFacade } from "../core/facades/comanda.facade";
import { ComandaStorageService } from "../core/services/storage/comanda-storage.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit, AfterViewInit {
  constructor(private router: Router, private comandaFacade: ComandaFacade, private comandaStorage: ComandaStorageService) {}

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

          this.router.navigate(["/lista-cidade"]);
        }),
        take(1)
      )
      .subscribe();
  }
}
