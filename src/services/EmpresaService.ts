import { Transaction } from "objection";
import Empresas from "../models/Empresas";
import { IEmpresa } from "../types/entities";

export async function NovaEmpresa({
    nome, cnpj, descricao,
}: IEmpresa, trx: Transaction) {
    const empresa = await Empresas.query(trx).insert({
        nome: nome,
        cnpj: cnpj,
        descricao: descricao,
    })
    return empresa
}