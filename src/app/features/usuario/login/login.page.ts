import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { take } from "rxjs/operators";
import { AutenticacaoService } from "src/app/core/services/autenticacao.service";
import { ToastHelper } from "src/app/shared/helpers/toast.helper";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;
  error = "";
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastHelper: ToastHelper
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

    if (this.autenticacaoService.possuiUsuarioLogado) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.toastHelper.exibir("Formulário inválido");

      return;
    }

    this.loading = true;
    this.autenticacaoService
      .login({ email: this.f.email.value, senha: this.f.password.value })
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.loginForm.reset();
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.loginForm.reset();
          this.error = error;
          this.loading = false;
        }
      );
  }
}
