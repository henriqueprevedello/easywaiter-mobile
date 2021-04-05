import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ComandaClienteDTO } from "src/app/models/comanda.dto";

const COMANDA = "comanda";

@Injectable({
  providedIn: "root"
})
export class ComandaStorageService {
  private comandaAtualSubject: BehaviorSubject<ComandaClienteDTO>;

  constructor() {
    this.atualizarSubject();
  }

  private atualizarSubject(){
    this.comandaAtualSubject = new BehaviorSubject<ComandaClienteDTO>(
      JSON.parse(localStorage.getItem(COMANDA))
    );
  }

  get comandaSubject(): BehaviorSubject<ComandaClienteDTO> {
    return this.comandaAtualSubject;
  }

  get comandaDTO(): ComandaClienteDTO {
    return JSON.parse(localStorage.getItem(COMANDA));
  }

  definir(comandaDTO: ComandaClienteDTO) {
    localStorage.setItem(COMANDA, JSON.stringify(comandaDTO));

    this.atualizarSubject();
  }

  limpar() {
    localStorage.removeItem(COMANDA);
    
    this.atualizarSubject();
  }
}
