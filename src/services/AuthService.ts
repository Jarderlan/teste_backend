import jwt from 'jsonwebtoken'
import Usuarios from '../models/Usuarios'
import { ISingIn } from '../types/entities'
require('dotenv').config()

const Secret = process.env.JWT_SECRET
const expiresIn = 1800

export async function singIn({ email, password }: ISingIn) {
    const usuario = await Usuarios.query().where({ email: email, password }).withGraphFetched('[endereco,gerencia]').first().throwIfNotFound()
    const token = jwt.sign({ user_id: usuario.id }, Secret, { expiresIn: expiresIn })
    return {
        token: token,
        expire_in: expiresIn
    }
}