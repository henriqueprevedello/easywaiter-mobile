import { MesaDTO } from './mesa.dto';

export interface EstabelecimentoDTO {
  codigoEstabelecimento: number;
  nome: string;
  descricao: string;
  numeroTelefone: string;
  cnpj: string;
  estado: string;
  cidade: string;
  mesas: Array<MesaDTO>;
}
