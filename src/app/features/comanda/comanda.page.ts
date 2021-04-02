import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.page.html',
  styleUrls: ['./comanda.page.scss'],
})
export class ComandaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltarPagina() {
    this.router.navigate(["/pedidos"]);
  }

  pagarCaixa(){
    this.router.navigate(["/aguarde-pagamento"]);
  }

  pagarPix(){
    this.router.navigate(["/aguarde-pagamento"]);
  }

}
