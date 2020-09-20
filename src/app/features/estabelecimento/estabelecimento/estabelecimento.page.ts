import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { CardapioCategoria } from "src/app/models/cardapio-categoria";
import { ModalController } from "@ionic/angular";
import { CarrinhoService } from "src/app/core/services/carrinho.service";
import { BehaviorSubject } from "rxjs";
import { CarrinhoPage } from '../../carrinho/carrinho/carrinho.page';
import { CarrinhoItem } from 'src/app/models/carrinho-item';
import { Router } from '@angular/router';

@Component({
  selector: "app-estabelecimento",
  templateUrl: "./estabelecimento.page.html",
  styleUrls: ["./estabelecimento.page.scss"],
})
export class EstabelecimentoPage implements OnInit {
  @ViewChild("cart", { static: false, read: ElementRef }) fab: ElementRef;

  carrinho = [];
  quantidadeItensCarrinho: BehaviorSubject<number>;
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
    private carrinhoService: CarrinhoService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.carrinho = this.carrinhoService.registros;
    this.quantidadeItensCarrinho = this.carrinhoService.quantidadeItens;
  }

  adicionarAoCarrinho(item: CarrinhoItem) {
    this.carrinhoService.adicionar(item);
  }

  async abrirCarrinho() {
    this.router.navigate(['carrinho']);
  }
}
