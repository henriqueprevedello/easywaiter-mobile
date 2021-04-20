import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { IonTextarea, ModalController } from "@ionic/angular";
import { CarrinhoStorageService } from "src/app/core/services/storage/carrinho-storage.service";
import { ProdutoDTO } from "src/app/models/produto.dto";

@Component({
  templateUrl: "./item-pedido-modal.page.html",
  styleUrls: ["./item-pedido-modal.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPedidoModalPage implements OnInit {
  @ViewChild("observacao") observacao: IonTextarea;
  @Input() produto: ProdutoDTO;

  quantidade = 1;

  constructor(
    private storageService: CarrinhoStorageService,
    private modalController: ModalController,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  diminuirQuantidade() {
    if (this.quantidade <= 1) {
      return;
    }
    this.quantidade--;
  }

  aumentarQuantidade() {
    this.quantidade++;
  }

  adicionarAoCarrinho() {
    this.storageService.adicionar({
      produto: this.produto,
      quantidade: this.quantidade,
      observacao: this.observacao.value
    });

    this.changeDetectorRef.detectChanges();

    this.modalController.dismiss();
  }

  cancelar() {
    this.modalController.dismiss();
  }
}
