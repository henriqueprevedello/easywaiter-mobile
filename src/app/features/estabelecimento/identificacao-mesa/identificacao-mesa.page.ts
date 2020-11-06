import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonSelect, NavParams } from "@ionic/angular";
import { EstabelecimentoFacade } from 'src/app/core/facades/estabelecimento.facade';
import { EstabelecimentoDTO } from 'src/app/models/estabelecimento.dto';
import { MesaDTO } from 'src/app/models/mesa.dto';
import { ToastHelper } from 'src/app/shared/helpers/toast.helper';

@Component({
  selector: "app-identificacao-mesa",
  templateUrl: "./identificacao-mesa.page.html",
  styleUrls: ["./identificacao-mesa.page.scss"],
})
export class IdentificacaoMesaPage implements OnInit {
  @ViewChild(IonSelect) ionSelect: IonSelect;

  estabelecimento: EstabelecimentoDTO;
  // perguntar pro mika se tem como transferir objeto de uma pagina pra outra sem sem pela url

  constructor(private router: Router, private route: ActivatedRoute, private toastHelper: ToastHelper, private estabelecimentoFacade: EstabelecimentoFacade) {}

  ngOnInit() {
    this.estabelecimentoFacade.adquirir(+this.route.snapshot.paramMap.get("codigoEstabelecimento")).subscribe(estabelecimento=>
      this.estabelecimento = estabelecimento
    );
  }

  confirmar() {
    if(this.ionSelect.value){
      this.router.navigate(["/estabelecimento", { codigoEstabelecimento: this.estabelecimento.codigoEstabelecimento }]);
    
      return;
    }

    this.toastHelper.exibir('Selecione uma mesa!');

  }
}
