import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import { CategoriaDTO } from "src/app/models/categoria.dto";
import { Observable } from "rxjs";
import { CarrinhoItem } from "src/app/models/carrinho-item";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "src/app/core/services/storage.service";
import { ModalController } from "@ionic/angular";
import { ItemPedidoModalPage } from "../item-pedido-modal/item-pedido-modal.page";
import { ProdutoDTO } from "src/app/models/produto.dto";
import { tap } from "rxjs/operators";
import { EstabelecimentoFacade } from "src/app/core/facades/estabelecimento.facade";
import { EstabelecimentoDTO } from "src/app/models/estabelecimento.dto";
import { EstabelecimentoService } from "src/app/core/services/estabelecimento.service";

@Component({
  selector: "app-estabelecimento",
  templateUrl: "./estabelecimento.page.html",
  styleUrls: ["./estabelecimento.page.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EstabelecimentoPage implements OnInit, AfterViewInit {
  @ViewChild("cart", { static: false, read: ElementRef }) fab: ElementRef;

  estabelecimento: EstabelecimentoDTO;
  carrinho: Array<CarrinhoItem> = [];
  carrinhoLength$: Observable<number>;

  constructor(
    private storageService: StorageService,
    private modalController: ModalController,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  ngOnInit() {
    this.estabelecimento = this.estabelecimentoService.estabelecimentoAtualDTO;

    this.storageService.get().then((itens) => {
      this.carrinho = itens;
      this.carrinhoLength$ = this.storageService.carrinhoLength$().pipe(
        tap(() => {
          this.changeDetectorRef.detectChanges();
        })
      );
    });
  }

  ngAfterViewInit() {}

  async adicionarAoCarrinho(produto: ProdutoDTO) {
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
