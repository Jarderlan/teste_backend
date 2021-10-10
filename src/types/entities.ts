export interface IEndereco {
    id?: number
    cep: string
    logradouro: string
    bairro: string
    localidade: string
    uf: string
    numero: string
    complemento: string
    ibge: string
}

export interface IUsuario {
    nome: string
    cnpj: string
    descricao: string
    endereco_id: number
    endereco: IEndereco
}

export interface ISingIn {
    usuario: IUsuario
}

export interface Empresa {

}