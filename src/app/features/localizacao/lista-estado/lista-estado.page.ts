import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-estado',
  templateUrl: './lista-estado.page.html',
  styleUrls: ['./lista-estado.page.scss'],
})
export class ListaEstadoPage implements OnInit {

  estados = [];
  estadosBuscadas = [];

  constructor(private router: Router) { }

  onClick(estado: any) {
    this.router.navigate(['/lista-cidade'])
  }

  ngOnInit() {
    this.adquirirestados();
  }

  adquirirestados() {
    this.estadosBuscadas = [
      {
        nome: "Paraná",
        sigla: "PR",
      },
      {
        nome: "Rio Grande do Sul",
        sigla: "RS",
      },
      {
        nome: "Santa Catarina",
        sigla: "SC",
      },
      {
        nome: "São Paulo",
        sigla: "SP",
      }
    ];
    this.estados = this.estadosBuscadas;
  }

  filtrar(pesquisa: any) {
    this.estados = this.estadosBuscadas.filter((estado) =>
      estado.name.toLowerCase().includes(pesquisa.target.value.toLowerCase())
    );
  }

}
