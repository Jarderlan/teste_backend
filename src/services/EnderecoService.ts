import { Transaction } from "objection";
import Enderecos from "../models/Enderecos";
import { IEndereco } from "../types/entities";


export async function novoEndereco({
    uf,
    cep,
    ibge,
    bairro,
    numero,
    localidade,
    logradouro,
    complemento
}: IEndereco,
    trx: Transaction) {

    return await Enderecos.query(trx)
        .insert({
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            localidade: localidade,
            uf: uf,
            numero: numero,
            complemento: complemento,
            ibge: ibge
        })
}