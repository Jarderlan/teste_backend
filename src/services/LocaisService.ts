import { Transaction } from "objection";
import Locais from "../models/Locais";
import { ILocais } from "../types/entities";

export async function getLocal(id: number) {
    
    return await Locais.query()
        .withGraphFetched('[endereco, empresa]')
        .findById(id)

}

export async function novoLocal({
    nome,
    endereco_id
}: ILocais,
    trx: Transaction) {

    return await Locais.query(trx)
        .insert({
            nome: nome,
            endereco_id: endereco_id
        })
}