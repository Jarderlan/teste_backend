import { Transaction } from "objection";
import Usuarios from "../models/Usuarios";
import { IUsuario } from "../types/entities";


export async function NovoUsuario({
    id, nome, endereco_id, email, password, telefone, endereco
}: IUsuario, trx: Transaction) {
    const usuario = Usuarios.query(trx).insert({
        id: id,
        nome: nome,
        endereco_id: endereco_id,
        email: email,
        password: password,
        telefone: telefone,
        endereco: endereco
    })
    return usuario
}