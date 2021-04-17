import { Injectable } from "@angular/core";
import { CategoriaDTO } from "src/app/models/categoria.dto";
import { ArquivoFacade } from "../../facades/arquivo.facade";

const CATEGORIAS = "categorias";

@Injectable({ providedIn: "root" })
export class CategoriaProdutosStorageService {
  constructor(private arquivoFacade: ArquivoFacade) {}

  get categorias(): Array<CategoriaDTO> {
    return JSON.parse(localStorage.getItem(CATEGORIAS));
  }

  definir(listaCategorias: Array<CategoriaDTO>): void {
    localStorage.setItem(
      CATEGORIAS,
      JSON.stringify(this.definirURLImagens(listaCategorias))
    );
  }

  private definirURLImagens(listaCategorias: Array<CategoriaDTO>) {
    const categoriasNovas: Array<CategoriaDTO> = [];

    listaCategorias.forEach((categoria) => {
      categoria.produtos.forEach(
        (p) => (p.imagem = this.arquivoFacade.adquirirURLImagem(p.imagem))
      );

      categoriasNovas.push(categoria);
    });

    return categoriasNovas;
  }

  limpar() {
    localStorage.removeItem(CATEGORIAS);
  }
}
