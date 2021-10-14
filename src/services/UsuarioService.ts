import { Transaction } from "objection";
import Usuarios from "../models/Usuarios";
import { IUsuario } from "../types/entities";


export async function novoUsuario({
    id,
    nome,
    email,
    password,
    telefone,
    endereco,
    endereco_id
}: IUsuario, trx: Transaction) {

    return Usuarios.query(trx)
        .insert({
            id: id,
            nome: nome,
            endereco_id: endereco_id,
            email: email,
            password: password,
            telefone: telefone,
            endereco: endereco
        })
}