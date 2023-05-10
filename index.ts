import { ClienteHttp } from "./fontes/cliente-http";

export function novoClienteHttp(urlBase: string = "", tempoMaximo: number = 5000, cabecalhos: any = {}) {
    return new ClienteHttp(urlBase, tempoMaximo, cabecalhos);
}
