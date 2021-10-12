import { Model } from "objection";
import { IEndereco } from "../types/entities";
import Empresas from "./Empresas";
import Enderecos from "./Enderecos";

export default class Locais extends Model {
    id?: number
    nome!: string
    endereco_id!: number
    endereco: IEndereco
    created_at?: string | Date
    updated_at?: string | Date

    static get tableName() {
        return 'locais';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nome', 'endereco_id'],
            properties: {
                id: { type: 'integer' },
                nome: { type: 'string' },
                endereco_id: { type: 'integer' }
            }
        };
    }

    static relationMappings = () => ({
        endereco: {
            relation: Model.BelongsToOneRelation,
            modelClass: Enderecos,

            join: {
                from: 'locais.endereco_id',
                to: 'enderecos.id',
            }
        },
        empresa: {
            relation: Model.ManyToManyRelation,
            modelClass: Empresas,
            join: {
                from: 'locais.id',
                through: {
                    from: 'empresa_locais.local_id',
                    to: 'empresa_locais.empresa_id'
                },
                to: 'empresas.id'
            }
        }
    })
}