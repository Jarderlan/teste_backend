export interface Endereco {
    cep: string
    logradouro: string
    bairro: string
    localidade: string
    uf: string
    numero: string
    complemento: string
    ibge: string
}

export interface Usuario {
    nome: string
    cnpj: string
    descricao: string
    endereco_id: number
    endereco: Endereco
}

export interface SingIn {
    usuario: Usuario
}

export interface Empresa {

}