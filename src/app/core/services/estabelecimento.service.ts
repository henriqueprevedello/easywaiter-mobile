import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { MesaDTO } from "src/app/models/mesa.dto";

const ESTABELECIMENTO_ATUAL = "estabelecimentoAtual";
const MESA_ATUAL = "mesaAtual";

@Injectable({ providedIn: "root" })
export class EstabelecimentoService {
  constructor() {}

  get estabelecimento(): EstabelecimentoDTO {
    return JSON.parse(localStorage.getItem(ESTABELECIMENTO_ATUAL));
  }

  get mesa(): MesaDTO {
    return JSON.parse(localStorage.getItem(MESA_ATUAL));
  }

  get possuiEstabelecimentoInformado() {
    if (this.estabelecimento) {
      return true;
    }

    return false;
  }

  definir(estabelecimentoDTO: EstabelecimentoDTO): void {
    localStorage.setItem(
      ESTABELECIMENTO_ATUAL,
      JSON.stringify(estabelecimentoDTO)
    );
  }

  definirMesa(mesaDTO: MesaDTO): void {
    localStorage.setItem(MESA_ATUAL, JSON.stringify(mesaDTO));
  }

  limpar() {
    localStorage.removeItem(ESTABELECIMENTO_ATUAL);
    localStorage.removeItem(MESA_ATUAL);
  }
}
