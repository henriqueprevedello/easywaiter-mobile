import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs";
import { CarrinhoItem } from "src/app/models/carrinho-item";

const CARRINHO = "carrinho";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private carrinhoLength = new BehaviorSubject(0);

  constructor(private storage: Storage) {}

  carrinhoLength$ = () => this.carrinhoLength.asObservable();

  set(carrinhoItem: CarrinhoItem) {
    this.storage.set(CARRINHO, carrinhoItem);
  }

  clear() {
    this.carrinhoLength.next(0);

    return this.storage.set(CARRINHO, []);
  }

  atualizarBehaviorQuantidade(itens: Array<CarrinhoItem>) {
    this.carrinhoLength.next(
      itens.reduce((sum, item) => {
        return sum + item.quantidade;
      }, 0)
    );
  }

  add(carrinhoItem: CarrinhoItem): Promise<any> {
    return this.storage.get(CARRINHO).then((itens: Array<CarrinhoItem>) => {
      if (itens) {
        itens.push(carrinhoItem);
        this.atualizarBehaviorQuantidade(itens);

        return this.storage.set(CARRINHO, itens);
      }

      this.atualizarBehaviorQuantidade([carrinhoItem]);

      return this.storage.set(CARRINHO, [carrinhoItem]);
    });
  }

  get(): Promise<Array<CarrinhoItem>> {
    this.storage
      .get(CARRINHO)
      .then((itens) => this.atualizarBehaviorQuantidade(itens));

    return this.storage.get(CARRINHO);
  }

  // update(carrinhoItem: CarrinhoItem): Promise<any> {
  //   return this.storage.get(CARRINHO).then((items: Array<CarrinhoItem>)=>{
  //     if(!items || items.length === 0){
  //       return null;
  //     }

  //     let itensNovos = [];

  //     for(let i of items){
  //       if(i.id === carrinhoItem.id){
  //         itensNovos.push(carrinhoItem);
  //       } else {
  //         itensNovos.push(i);
  //       }
  //     }

  //     return this.storage.set(CARRINHO, itensNovos);
  //   })
  // }

  // delete(id: number){
  //   return this.storage.get(CARRINHO).then((items: Array<CarrinhoItem>)=>{
  //     if(!items || items.length === 0){
  //       return null;
  //     }

  //     let toKeep = [];

  //     for(let i of items){
  //       if(i.id !== id){
  //         toKeep.push(i);
  //       }
  //     }

  //     return this.storage.set(CARRINHO, toKeep);
  //   })
  // }
}
