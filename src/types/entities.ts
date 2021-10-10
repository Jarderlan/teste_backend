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
    id?: number
    nome: string
    endereco_id: number
    endereco: IEndereco
    email: string
    password: string
    telefone: string
    created_at?: string | Date
    updated_at?: string | Date
}

export interface ISingIn {
    usuario: IUsuario
}

export interface Empresa {

}