import axios, { AxiosInstance, AxiosResponse, RawAxiosRequestHeaders } from "axios";
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

    async requisicaoGet(sufixoUrl: string, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.get(
            sufixoUrl,
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

    async requisicaoPost(sufixoUrl: string, corpo: any, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.post(
            sufixoUrl,
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

    async requisicaoPut(sufixoUrl: string, corpo: any, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.put(
            sufixoUrl,
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

    async requisicaoDelete(sufixoUrl: string, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.delete(
            sufixoUrl,
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

    async requisicaoPatch(sufixoUrl: string, corpo: any, cabecalhos?: RawAxiosRequestHeaders): Promise<RespostaHttp> {
        const respostaAxios: AxiosResponse<any, any> = await this.instanciaAxios.patch(
            sufixoUrl,
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