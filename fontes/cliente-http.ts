import axios, { AxiosInstance, AxiosResponse } from "axios";

export class ClienteHttp {
    instanciaAxios: AxiosInstance;

    constructor(urlBase: string = "", tempoMaximo: number = 5000, cabecalhos: any = {}) {
        this.instanciaAxios = axios.create({
            baseURL: urlBase,
            timeout: tempoMaximo,
            headers: cabecalhos
        });
    }

    async requisicaoGet(sufixoUrl: string): Promise<AxiosResponse<any, any>> {
        return await this.instanciaAxios.get(
            sufixoUrl
        );
    }

    async requisicaoPost(sufixoUrl: string, corpo: any): Promise<AxiosResponse<any, any>> {
        return await this.instanciaAxios.post(
            sufixoUrl,
            corpo
        );
    }

    async requisicaoPut(sufixoUrl: string, corpo: any): Promise<AxiosResponse<any, any>> {
        return await this.instanciaAxios.put(
            sufixoUrl,
            corpo
        );
    }

    async requisicaoDelete(sufixoUrl: string): Promise<AxiosResponse<any, any>> {
        return await this.instanciaAxios.delete(
            sufixoUrl
        );
    }
}