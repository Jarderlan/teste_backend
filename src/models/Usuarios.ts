import { Model } from 'objection'

export default class Usuarios extends Model {
    nome!: string
    endereco_id!: number
    email!: string
    password!: string
    telefone!: string
    created_at?: string | Date
    updated_at?: string | Date

    static get tableName() {
        return 'usuarios';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nome', 'telefone', 'email', 'password', 'endereco_id'],

            properties: {
                id: { type: 'integer' },
                nome: { type: 'string', maxLength: 500 },
                telefone: { type: 'string', maxLength: 15 },
                email: { type: 'string' },
                password: { type: 'string' },
                endereco_id: { type: 'integer' }
            }
        };
    }

}