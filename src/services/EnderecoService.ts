import { Transaction } from "objection";
import Enderecos from "../models/Enderecos";
import { IEndereco } from "../types/entities";


export async function NovoEndereco({
    cep, logradouro, bairro, localidade, uf, numero, complemento, ibge
}: IEndereco, trx: Transaction) {
    const endereco = await Enderecos.query(trx).insert({
        cep: cep,
        logradouro: logradouro,
        bairro: bairro,
        localidade: localidade,
        uf: uf,
        numero: numero,
        complemento: complemento,
        ibge: ibge
    })
    return endereco
}