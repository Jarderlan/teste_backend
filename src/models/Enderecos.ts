import { Model } from "objection";

export default class Enderecos extends Model {
    static get tableName() {
        return 'enderecos';
    }

    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['cep', 'logradouro', 'bairro', 'localidade', 'uf', 'numero', 'complemento', 'ibge'],
            properties: {
                id: { type: 'integer' },
                cep: { type: 'string', maxLength: 10 },
                logradouro: { type: 'string', maxLength: 100 },
                bairro: { type: 'string', maxLength: 100 },
                localidade: { type: 'string', maxLength: 100 },
                uf: { type: 'string', maxLength: 2 },
                numero: { type: 'string', maxLength: 10 },
                complemento: { type: 'string', maxLength: 100 },
                ibge: { type: 'string', maxLength: 50 }
            }
        };
    }
}