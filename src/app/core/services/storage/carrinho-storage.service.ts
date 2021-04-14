import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PedidoItemDTO } from "src/app/models/pedido-item.dto";

const CARRINHO = "carrinho";

@Injectable({
  providedIn: "root",
})
export class CarrinhoStorageService {
  private carrinhoAtualSubject: BehaviorSubject<Array<PedidoItemDTO>>;
  private quantidadeAtualSubject: BehaviorSubject<number>;

  constructor() {
    this.atualizarCarrinho();
    this.atualizarQuantidade();
  }

  private atualizarQuantidade(): void {
    this.quantidadeAtualSubject = new BehaviorSubject<number>(
      this.adquirirQuantidadeProdutos(
        JSON.parse(localStorage.getItem(CARRINHO))
      )
    );
  }

  private atualizarCarrinho(): void {
    this.carrinhoAtualSubject = new BehaviorSubject<Array<PedidoItemDTO>>(
      JSON.parse(localStorage.getItem(CARRINHO))
    );
  }

  get quantidade(): number {
    return this.quantidadeAtualSubject.value;
  }

  get carrinho(): Array<PedidoItemDTO> {
    return this.carrinhoAtualSubject.value;
  }

  private set(itensCarrinho: Array<PedidoItemDTO>): void {
    localStorage.setItem(CARRINHO, JSON.stringify(itensCarrinho));

    this.atualizarQuantidade();
    this.atualizarCarrinho();
  }

  limpar(): void {
    localStorage.removeItem(CARRINHO);
    this.atualizarQuantidade();
    this.atualizarCarrinho();
  }

  adicionar(carrinhoItem: PedidoItemDTO): void {
    let lista: Array<PedidoItemDTO> = JSON.parse(
      localStorage.getItem(CARRINHO)
    );

    if (lista) {
      lista.push(carrinhoItem);

      this.set(lista);

      return;
    }

    this.set([carrinhoItem]);
  }

  adquirir = (): Array<PedidoItemDTO> =>
    JSON.parse(localStorage.getItem(CARRINHO));

  private adquirirQuantidadeProdutos(itens: Array<PedidoItemDTO>): number {
    if (!itens || !itens.length) {
      return 0;
    }
    return itens.reduce((sum, item) => {
      return sum + item.quantidade;
    }, 0);
  }
}
