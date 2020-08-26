import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacao-mesa',
  templateUrl: './identificacao-mesa.page.html',
  styleUrls: ['./identificacao-mesa.page.scss'],
})
export class IdentificacaoMesaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  confirmar(){
    this.router.navigate(['/estabelecimento']);
  }

}
