import axios, { AxiosInstance, AxiosResponse } from "axios";
import { RespostaHttp } from "./resposta-http";

export class ClienteHttp {
    instanciaAxios: AxiosInstance;

    constructor(urlBase: string = "", tempoMaximo: number = 5000, cabecalhos: any = {}) {
        this.instanciaAxios = axios.create({
            baseURL: urlBase,
            timeout: tempoMaximo,
            headers: cabecalhos
        });
    }

    async requisicaoGet(sufixoUrl: string): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.get(
            sufixoUrl
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoPost(sufixoUrl: string, corpo: any): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.post(
            sufixoUrl,
            corpo
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoPut(sufixoUrl: string, corpo: any): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.put(
            sufixoUrl,
            corpo
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoDelete(sufixoUrl: string): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.delete(
            sufixoUrl
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoPatch(sufixoUrl: string, corpo: any): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.patch(
            sufixoUrl,
            corpo
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }
}