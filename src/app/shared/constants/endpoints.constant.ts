const URL_EASY_WAITER_SERVER = "http://localhost:3200";

const URL_CONTROLLER_AUTENTICACAO = `${URL_EASY_WAITER_SERVER}/autenticacao`;
const URL_CONTROLLER_PRODUTO = `${URL_EASY_WAITER_SERVER}/produto`;
const URL_CONTROLLER_PEDIDO = `${URL_EASY_WAITER_SERVER}/pedido`;
const URL_CONTROLLER_CLIENTE = `${URL_EASY_WAITER_SERVER}/cliente`;
const URL_CONTROLLER_ESTABELECIMENTO = `${URL_EASY_WAITER_SERVER}/estabelecimento`;

export class EndpointsConstants {
  static readonly AUTENTICACAO = {
    LOGIN: URL_CONTROLLER_AUTENTICACAO,
  };

  static readonly PRODUTO = {
    ADQUIRIR: URL_CONTROLLER_PRODUTO,
  };

  static readonly PEDIDO = {
    ADICIONAR: URL_CONTROLLER_PEDIDO,
    ADQUIRIR: URL_CONTROLLER_PEDIDO,
    ADQUIRIR_TODOS: URL_CONTROLLER_PEDIDO.concat('/adquirirTodos'),
  };

  static readonly CLIENTE = {
    REGISTRAR: URL_CONTROLLER_CLIENTE,
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
