import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalizacaoDTO } from "src/app/models/localizacao.dto";

const LOCALIZACAO = "localizacao";

@Injectable({
  providedIn: "root"
})
export class LocalizacaoStorageService {
  private localizacaoAtualSubject: BehaviorSubject<LocalizacaoDTO>;

  constructor() {
    this.atualizarSubject();
  }

  private atualizarSubject(){
    this.localizacaoAtualSubject = new BehaviorSubject<LocalizacaoDTO>(
      JSON.parse(localStorage.getItem(LOCALIZACAO))
    );
  }

  get localizacaoSubject(): BehaviorSubject<LocalizacaoDTO> {
    return this.localizacaoAtualSubject;
  }

  get localizacaoDTO(): LocalizacaoDTO {
    return JSON.parse(localStorage.getItem(LOCALIZACAO));
  }

  definir(localizacaoDTO: LocalizacaoDTO) {
    localStorage.setItem(LOCALIZACAO, JSON.stringify(localizacaoDTO));

    this.atualizarSubject();
  }

  limpar() {
    localStorage.removeItem(LOCALIZACAO);
    
    this.atualizarSubject();
  }
}
