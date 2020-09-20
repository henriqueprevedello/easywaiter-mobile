import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CarrinhoItem } from 'src/app/models/carrinho-item';


@Injectable({
  providedIn: "root",
})
export class CarrinhoService {

  private carrinho: Array<CarrinhoItem> = [];
  private quantidadeItensCarrinho = new BehaviorSubject(0);

  constructor() {}

  get registros() {
    return this.carrinho;
  }

  get quantidadeItens() {
    return this.quantidadeItensCarrinho;
  }

  adicionar(item: CarrinhoItem) {
    let adicionado = false;

    for (let itemCarrinho of this.carrinho) {
      if (item.cardapioItem.id === itemCarrinho.cardapioItem.id) {
        itemCarrinho.quantidade += 1;
        adicionado = true;
        break;
      }
    }

    if (!adicionado) {
      this.carrinho.push(item);
    }

    this.quantidadeItensCarrinho.next(this.quantidadeItensCarrinho.value + 1);
  }

  diminuirQuantidade(item: CarrinhoItem) {
    for (let [index, itemCarrinho] of this.carrinho.entries()) {
      if (item.cardapioItem.id === itemCarrinho.cardapioItem.id) {
        itemCarrinho.quantidade -= 1;

        if (itemCarrinho.quantidade === 0) {
          this.carrinho.splice(index, 1);
        }
      }
    }

    this.quantidadeItensCarrinho.next(this.quantidadeItensCarrinho.value - 1);
  }

  remover(item: CarrinhoItem) {
    for (let [index, itemCarrinho] of this.carrinho.entries()) {
      if (itemCarrinho.cardapioItem.id === item.cardapioItem.id) {
        this.quantidadeItensCarrinho.next(this.quantidadeItensCarrinho.value - itemCarrinho.quantidade);

        this.carrinho.splice(index, 1);
      }
    }
  }
}
