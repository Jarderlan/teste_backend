import { Transaction } from "objection";
import Locais from "../models/Locais";
import { ILocais } from "../types/entities";

export async function getLocal(id: number) {
    const local = Locais.query().withGraphFetched('[endereco, empresa]').findById(id)
    return local
}

export async function NovoLocal({
    nome, endereco_id
}: ILocais, trx: Transaction) {
    const local = Locais.query(trx).insert({
        nome: nome,
        endereco_id: endereco_id
    })
    return local
}