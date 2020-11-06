import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";

@Injectable({ providedIn: "root" })
export class EstabelecimentoService {
  private keyStorage = "estabelecimentoAtual";
  private estabelecimentoAtualSubject: BehaviorSubject<EstabelecimentoDTO>;
  estabelecimentoAtual: Observable<EstabelecimentoDTO>;

  constructor() {
    this.estabelecimentoAtualSubject = new BehaviorSubject<EstabelecimentoDTO>(
      JSON.parse(localStorage.getItem(this.keyStorage))
    );

    this.estabelecimentoAtual = this.estabelecimentoAtualSubject.asObservable();
  }

  get estabelecimentoAtualDTO(): EstabelecimentoDTO {
    return this.estabelecimentoAtualSubject.value;
  }

  get possuiEstabelecimentoInformado() {
    if (this.estabelecimentoAtualSubject.value) {
      return true;
    }

    return false;
  }

  definir(estabelecimentoDTO: EstabelecimentoDTO): void {
    localStorage.setItem(this.keyStorage, JSON.stringify(estabelecimentoDTO));
  }

  limpar() {
    localStorage.removeItem(this.keyStorage);
    this.estabelecimentoAtualSubject.next(null);
  }
}
