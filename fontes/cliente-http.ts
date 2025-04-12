import axios, { AxiosInstance, AxiosResponse, RawAxiosRequestHeaders } from "axios";
import { RespostaHttp } from "./resposta-http";
import { ArgumentoInterface } from "./interfaces";

export class ClienteHttp {
    instanciaAxios: AxiosInstance;

    constructor(urlBase: string = "", tempoMaximo: number = 5000, cabecalhos: any = {}) {
        this.instanciaAxios = axios.create({
            baseURL: `${urlBase}`,
            timeout: tempoMaximo,
            headers: cabecalhos
        });
    }

    async requisicaoGet(sufixoUrl: string | ArgumentoInterface, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const sufixoUrlResolvido = sufixoUrl.hasOwnProperty("valor") ? (sufixoUrl as ArgumentoInterface).valor : sufixoUrl;
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.get(
            `${sufixoUrlResolvido}`,
            {
                headers: { 
                    ...cabecalhos
                }
            }
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoPost(sufixoUrl: string | ArgumentoInterface, corpo: any, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const sufixoUrlResolvido = sufixoUrl.hasOwnProperty("valor") ? (sufixoUrl as ArgumentoInterface).valor : sufixoUrl;
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.post(
            `${sufixoUrlResolvido}`,
            corpo,
            {
                headers: { 
                    ...cabecalhos
                }
            }
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoPut(sufixoUrl: string | ArgumentoInterface, corpo: any, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const sufixoUrlResolvido = sufixoUrl.hasOwnProperty("valor") ? (sufixoUrl as ArgumentoInterface).valor : sufixoUrl;
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.put(
            `${sufixoUrlResolvido}`,
            corpo,
            {
                headers: { 
                    ...cabecalhos
                }
            }
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoDelete(sufixoUrl: string | ArgumentoInterface, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const sufixoUrlResolvido = sufixoUrl.hasOwnProperty("valor") ? (sufixoUrl as ArgumentoInterface).valor : sufixoUrl;
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.delete(
            `${sufixoUrlResolvido}`,
            {
                headers: { 
                    ...cabecalhos
                }
            }
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }

    async requisicaoPatch(sufixoUrl: string | ArgumentoInterface, corpo: any, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const sufixoUrlResolvido = sufixoUrl.hasOwnProperty("valor") ? (sufixoUrl as ArgumentoInterface).valor : sufixoUrl;
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.patch(
            `${sufixoUrlResolvido}`,
            corpo,
            {
                headers: { 
                    ...cabecalhos
                }
            }
        );

        return new RespostaHttp(
            respostaAxios.status, 
            respostaAxios.statusText,
            respostaAxios.data
        );
    }
}