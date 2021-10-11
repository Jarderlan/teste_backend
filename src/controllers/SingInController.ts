import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { NovoEndereco } from '../services/EnderecoService'
import { NovoUsuario } from '../services/UsuarioService'
import { ISingIn } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'

const router = Router()

router.post('/sing-in', async (req: Request, res: Response) => {
    const { usuario }: ISingIn = req.body
    try {
        await knex.transaction(async trx => {
            const endereco = await NovoEndereco(usuario.endereco, trx);

            const usuariosI = await NovoUsuario({ ...usuario, endereco_id: endereco.id, }, trx);

            sendResponse({
                data: usuariosI,
                code: 200,
                res
            })
        })
    } catch (error) {
        errorHandler({ error, res })
    }

});

export default router