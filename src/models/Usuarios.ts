import { Model } from 'objection'
import { IEndereco } from '../types/entities'
import Enderecos from './Enderecos'

export default class Usuarios extends Model {
    id?: number
    nome!: string
    endereco_id!: number
    email!: string
    password!: string
    telefone!: string
    created_at?: string | Date
    updated_at?: string | Date
    endereco: IEndereco

    static get tableName() {
        return 'users';
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

    static relationMappings = () => ({
        endereco: {
            relation: Model.BelongsToOneRelation,
            modelClass: Enderecos,

            join: {
                from: 'users.endereco_id',
                to: 'enderecos.id',
            },
        },
    })

}