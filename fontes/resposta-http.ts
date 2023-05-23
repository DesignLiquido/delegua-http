export class RespostaHttp {
    codigoStatus: number;
    mensagemStatus: string;
    dados: any;

    constructor(codigoStatus: number, mensagemStatus: string, dados: any) {
        this.codigoStatus = codigoStatus;
        this.mensagemStatus = mensagemStatus;
        this.dados = dados;
    }
}