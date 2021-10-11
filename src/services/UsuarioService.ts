import Usuarios from "../models/Usuarios";
import { IUsuario } from "../types/entities";


export async function NovoUsuario({
    id, nome, endereco_id, email, password, telefone, endereco
}: IUsuario) {
    const usuario = Usuarios.query().insert({
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