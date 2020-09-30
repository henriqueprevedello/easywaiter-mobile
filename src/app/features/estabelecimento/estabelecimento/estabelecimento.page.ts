import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CardapioCategoria } from "src/app/models/cardapio-categoria";
import { BehaviorSubject, Observable } from "rxjs";
import { CarrinhoItem } from "src/app/models/carrinho-item";
import { Router } from "@angular/router";
import { StorageService } from "src/app/core/services/storage.service";
import { ModalController } from "@ionic/angular";
import { ItemPedidoModalPage } from "../item-pedido-modal/item-pedido-modal.page";
import { Produto } from "src/app/models/produto";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-estabelecimento",
  templateUrl: "./estabelecimento.page.html",
  styleUrls: ["./estabelecimento.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstabelecimentoPage implements OnInit, AfterViewInit {
  @ViewChild("cart", { static: false, read: ElementRef }) fab: ElementRef;

  carrinho: Array<CarrinhoItem> = [];
  carrinhoLength$: Observable<number>;
  listaCardapio: Array<CardapioCategoria> = [
    {
      titulo: "Bebidas",
      itens: [
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
      ],
    },
    {
      titulo: "Bebidas",
      itens: [
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
        {
          id: 1,
          nome: "Coca Cola 350ml",
          descricao: "Refrigerante lorem impsum",
          imagem:
            "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
          valor: 3.49,
        },
      ],
    },
  ];

  constructor(
    private storageService: StorageService,
    private modalController: ModalController,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.storageService.get().then((itens) => {
      this.carrinho = itens;
      this.carrinhoLength$ = this.storageService.carrinhoLength$().pipe(
        tap(() => {
          debugger;
          this.changeDetectorRef.detectChanges();
        })
      );
      debugger;
    });
  }

  ngAfterViewInit() {
    debugger;
  }

  async adicionarAoCarrinho(produto: Produto) {
    const modal = await this.modalController.create({
      component: ItemPedidoModalPage,
      cssClass: "modal-padrao",
      componentProps: { produto: produto },
    });

    return await modal.present();
  }

  async abrirCarrinho() {
    this.router.navigate(["carrinho"]);
  }
}
