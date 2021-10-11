import { Model } from "objection";

export default class Empresas extends Model {
    id?: number
    nome!: string
    cnpj!: string
    descricao!: string
    created_at?: string | Date
    updated_at?: string | Date

    static get tableName() {
        return 'empresas';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nome', 'cnpj', 'descricao'],
            properties: {
                id: { type: 'integer' },
                nome: { type: 'string' },
                cnpj: { type: 'string', maxLength: 18 },
                descricao: { type: 'string' },
            }
        };
    }
}