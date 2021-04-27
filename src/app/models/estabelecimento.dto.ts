import { CategoriaDTO } from './categoria.dto';
import { MesaDTO } from './mesa.dto';

export interface EstabelecimentoDTO {
  codigoEstabelecimento: number;
  nome: string;
  descricao: string;
  numeroTelefone: string;
  chavePix: string;
  cnpj: string;
  estado: string;
  cidade: string;
  imagem: string;
  mesas: Array<MesaDTO>;
  categorias: Array<CategoriaDTO>;
}
