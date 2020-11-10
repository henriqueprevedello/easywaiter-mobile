import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { tap } from "rxjs/operators";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { MesaDTO } from "src/app/models/mesa.dto";

@Injectable({ providedIn: "root" })
export class EstabelecimentoService {
  private ESTABELECIMENTO_ATUAL = "estabelecimentoAtual";
  private MESA_ATUAL = "mesaAtual";
  private estabelecimentoAtualSubject: BehaviorSubject<EstabelecimentoDTO>;
  estabelecimentoAtual: Observable<EstabelecimentoDTO>;

  constructor() {
    this.estabelecimentoAtualSubject = new BehaviorSubject<EstabelecimentoDTO>(
      JSON.parse(localStorage.getItem(this.ESTABELECIMENTO_ATUAL))
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
    localStorage.setItem(
      this.ESTABELECIMENTO_ATUAL,
      JSON.stringify(estabelecimentoDTO)
    );

    this.estabelecimentoAtualSubject.next(estabelecimentoDTO);
  }

  definirMesa(mesaDTO: MesaDTO): void {
    localStorage.setItem(this.MESA_ATUAL, JSON.stringify(mesaDTO));
  }

  limpar() {
    localStorage.removeItem(this.ESTABELECIMENTO_ATUAL);
    localStorage.removeItem(this.MESA_ATUAL);
    this.estabelecimentoAtualSubject.next(null);
  }
}
