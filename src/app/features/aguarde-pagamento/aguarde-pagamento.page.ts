import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aguarde-pagamento',
  templateUrl: './aguarde-pagamento.page.html',
  styleUrls: ['./aguarde-pagamento.page.scss'],
})
export class AguardePagamentoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => 
      this.router.navigate(['home'])
    , 3000);
  }

}
