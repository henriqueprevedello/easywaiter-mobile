import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ClienteFacade } from "src/app/core/facades/cliente.facade";
import { ToastHelper } from "src/app/shared/helpers/toast.helper";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.page.html",
  styleUrls: ["./registro.page.scss"],
})
export class RegistroPage implements OnInit {

  constructor(
    private clienteFacade: ClienteFacade,
    private toastHelper: ToastHelper,
    private router: Router
  ) {}

  ngOnInit() {}

  registrar(form: NgForm) {
    this.clienteFacade.registrar(form.value).subscribe(
      () => {
        this.toastHelper.exibir("Usuário registrado com sucesso!");
        this.router.navigate(["/login"]);
      },
      () => {
        this.toastHelper.exibir("Falha ao registrar usuário!");
        form.reset();
      }
    );
  }

  voltarPagina() {
    this.router.navigate(["/login"]);
  }
}
