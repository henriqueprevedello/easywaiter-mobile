const URL_EASY_WAITER_SERVER = "http://localhost:3200";

const URL_CONTROLLER_AUTENTICACAO = `${URL_EASY_WAITER_SERVER}/autenticacao`;
const URL_CONTROLLER_PRODUTO = `${URL_EASY_WAITER_SERVER}/produto`;
const URL_CONTROLLER_PEDIDO = `${URL_EASY_WAITER_SERVER}/pedido`;
const URL_CONTROLLER_COMANDA = `${URL_EASY_WAITER_SERVER}/comanda`;
const URL_CONTROLLER_CLIENTE = `${URL_EASY_WAITER_SERVER}/cliente`;
const URL_CONTROLLER_CATEGORIA = `${URL_EASY_WAITER_SERVER}/categoria`;
const URL_CONTROLLER_CONEXAO = `${URL_EASY_WAITER_SERVER}/conexao`;
const URL_CONTROLLER_ARQUIVO = `${URL_EASY_WAITER_SERVER}/arquivo`;
const URL_CONTROLLER_ESTABELECIMENTO = `${URL_EASY_WAITER_SERVER}/estabelecimento`;

export class EndpointsConstants {
  static readonly AUTENTICACAO = {
    LOGIN: URL_CONTROLLER_AUTENTICACAO,
  };

  static readonly PRODUTO = {
    ADQUIRIR: URL_CONTROLLER_PRODUTO,
  };

  static readonly ARQUIVO = {
    UPLOAD: URL_CONTROLLER_ARQUIVO.concat('/upload'),
    DOWNLOAD: URL_CONTROLLER_ARQUIVO.concat('/'),
  };

  static readonly PEDIDO = {
    ADICIONAR: URL_CONTROLLER_PEDIDO,
    ADQUIRIR: URL_CONTROLLER_PEDIDO,
    ADQUIRIR_TODOS: URL_CONTROLLER_PEDIDO.concat('/adquirirTodos'),
  };

  static readonly COMANDA = {
    ADQUIRIR_ABERTA: URL_CONTROLLER_COMANDA.concat('/adquirirAberta'),
    PAGAMENTO_REALIZADO: URL_CONTROLLER_COMANDA.concat('/pagamentoRealizado')
  };

  static readonly CONEXAO = {
    TESTAR: URL_CONTROLLER_CONEXAO,
  };

  static readonly CLIENTE = {
    REGISTRAR: URL_CONTROLLER_CLIENTE,
  };

  static readonly CATEGORIA = {
    ADQUIRIR: URL_CONTROLLER_CATEGORIA.concat('/adquirirCategoriasEProdutosDisponiveis'),
  };

  static readonly ESTABELECIMENTO = {
    ADQUIRIR_POR_CODIGO: URL_CONTROLLER_ESTABELECIMENTO.concat(
      "/adquirirPorCodigo"
    ),
    ADQUIRIR_LOCALIZACOES: URL_CONTROLLER_ESTABELECIMENTO.concat(
      "/adquirirLocalizacoes"
    ),
    ADQUIRIR_POR_LOCALIZACAO: URL_CONTROLLER_ESTABELECIMENTO.concat(
      "/adquirirPorLocalizacao"
    ),
  };
}
