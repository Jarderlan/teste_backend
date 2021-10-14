import { Transaction } from "objection";
import Empresas from "../models/Empresas";
import { IEmpresa } from "../types/entities";

export async function novaEmpresa({
    nome,
    cnpj,
    descricao,
}: IEmpresa,
    trx: Transaction) {

    return await Empresas.query(trx)
        .insert({
            nome: nome,
            cnpj: cnpj,
            descricao: descricao,
        })
}