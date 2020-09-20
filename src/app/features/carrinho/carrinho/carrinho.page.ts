import { Component, OnInit } from '@angular/core';
import {  CarrinhoService } from 'src/app/core/services/carrinho.service';
import { ModalController } from '@ionic/angular';
import { CarrinhoItem } from 'src/app/models/carrinho-item';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

carrinho: Array<CarrinhoItem> = [];

  constructor(private carrinhoService: CarrinhoService, private modalController: ModalController, private location: Location) { }

  ngOnInit() {
    this.carrinho = this.carrinhoService.registros;
  }

  decreaseCartItem(product){
    this.carrinhoService.diminuirQuantidade(product);
  }

  increaseCartItem(product){
    this.carrinhoService.adicionar(product);
  }

  removeCartItem(product){
    this.carrinhoService.remover(product)
  }

  getTotal(){
    return this.carrinho.reduce((i, j) => i + j.cardapioItem.valor * j.quantidade, 0);
  }

  close(){
    this.modalController.dismiss();
  }

  voltarPagina(){
    this.location.back()
  }

  checkout(){
    
  }

}
