const URL_EASY_WAITER_SERVER = 'http://localhost:3200';

const URL_CONTROLLER_AUTENTICACAO = `${URL_EASY_WAITER_SERVER}/autenticacao`;
const URL_CONTROLLER_PRODUTO = `${URL_EASY_WAITER_SERVER}/produto`;
const URL_CONTROLLER_PEDIDO = `${URL_EASY_WAITER_SERVER}/pedido`;
const URL_CONTROLLER_CLIENTE = `${URL_EASY_WAITER_SERVER}/cliente`;
const URL_CONTROLLER_ESTABELECIMENTO = `${URL_EASY_WAITER_SERVER}/estabelecimento`;


export class EndpointsConstants {

    static readonly AUTENTICACAO = {
        LOGIN: URL_CONTROLLER_AUTENTICACAO
    };

    static readonly PRODUTO = {
        ADQUIRIR: URL_CONTROLLER_PRODUTO
    };

    static readonly PEDIDO = {
        REGISTRAR: URL_CONTROLLER_PEDIDO
    };

    static readonly CLIENTE = {
        REGISTRAR: URL_CONTROLLER_CLIENTE
    };

    static readonly ESTABELECIMENTO = {
        ADQUIRIR: URL_CONTROLLER_ESTABELECIMENTO,
        ADQUIRIR_LOCALIZACOES: URL_CONTROLLER_ESTABELECIMENTO.concat('/adquirirLocalizacoes'),
        ADQUIRIR_POR_LOCALIZACAO: URL_CONTROLLER_ESTABELECIMENTO.concat('/adquirirPorLocalizacao')
    };
}