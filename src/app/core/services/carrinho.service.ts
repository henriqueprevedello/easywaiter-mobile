import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CarrinhoItem } from "src/app/models/carrinho-item";

const CARRINHO = "carrinho";

@Injectable({
  providedIn: "root",
})
export class CarrinhoService {
  private carrinhoAtualSubject: BehaviorSubject<Array<CarrinhoItem>>;
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
    this.carrinhoAtualSubject = new BehaviorSubject<Array<CarrinhoItem>>(
      JSON.parse(localStorage.getItem(CARRINHO))
    );
  }

  get quantidade(): number {
    return this.quantidadeAtualSubject.value;
  }

  get carrinho(): Array<CarrinhoItem> {
    return this.carrinhoAtualSubject.value;
  }

  private set(itensCarrinho: Array<CarrinhoItem>): void {
    localStorage.setItem(CARRINHO, JSON.stringify(itensCarrinho));

    this.atualizarQuantidade();
    this.atualizarCarrinho();
  }

  limpar(): void {
    localStorage.removeItem(CARRINHO);
    this.atualizarQuantidade();
    this.atualizarCarrinho();
  }

  adicionar(carrinhoItem: CarrinhoItem): void {
    let lista: Array<CarrinhoItem> = JSON.parse(localStorage.getItem(CARRINHO));

    if (lista) {
      lista.push(carrinhoItem);

      this.set(lista);

      return;
    }

    this.set([carrinhoItem]);
  }

  adquirir = (): Array<CarrinhoItem> =>
    JSON.parse(localStorage.getItem(CARRINHO));

  private adquirirQuantidadeProdutos(itens: Array<CarrinhoItem>): number {
    if (!itens || !itens.length) {
      return 0;
    }
    return itens.reduce((sum, item) => {
      return sum + item.quantidade;
    }, 0);
  }
}
