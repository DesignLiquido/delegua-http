import { novoClienteHttp } from "..";

describe('Cliente HTTP', () => {
    it('Deve trazer dados com sucesso', async () => {
        const clienteHttp = novoClienteHttp(undefined, "https://github.com");
        const resultado = await clienteHttp.requisicaoGet({ nome: undefined, valor: "/DesignLiquido/delegua"});
        expect(resultado).toBeTruthy();
        expect(resultado.codigoStatus).toBe(200);
    });
});