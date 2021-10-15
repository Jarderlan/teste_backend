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

export interface ISingUp {
    usuario: IUsuario
}

export interface IEmpresa {
    id?: number
    nome: string
    cnpj: string
    descricao: string
    created_at?: string | Date
    updated_at?: string | Date
}

export interface ILocais {
    id?: number
    nome: string
    endereco_id: number
    usuario_id?: number
    endereco?: IEndereco
    empresa?: IEmpresa
    usuario?: IUsuario
    principal?: boolean
}