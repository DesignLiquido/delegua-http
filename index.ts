import { ClienteHttp } from "./fontes/cliente-http";

/**
 * Monta o cliente HTTP básico para requisições.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {string} urlBase O prefixo do endereço para a requisição. Por exemplo, https://designliquido.com.br. 
 * @param {number} tempoMaximo O tempo máximo de espera para uma requisição responder, em milisegundos. 
 *                 Por padrão, 5000 ms (5 segundos).
 * @param {any} cabecalhos Configurações adicionais de cabeçalhos. 
 * @returns {ClienteHttp} Um cliente HTTP configurado e pronto para uso.
 */
export function novoClienteHttp(_: any, urlBase: string = "", tempoMaximo: number = 5000, cabecalhos: any = {}): ClienteHttp {
    return new ClienteHttp(urlBase, tempoMaximo, cabecalhos);
}

export * from './fontes/resposta-http';