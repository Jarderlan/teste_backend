import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { errorHandler, sendResponse } from './CoreController'
import { NovoEndereco } from '../services/EnderecoService'
import { NovoUsuario } from '../services/UsuarioService'
import { ISingUp } from '../types/entities'
import Usuarios from '../models/Usuarios'

const router = Router()

router.get('/usuario', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id) ?? 0;
    try {
        const usuario = await Usuarios.query().withGraphFetched('[endereco,gerencia]')
        sendResponse({
            data: usuario,
            code: 200,
            res
        })
    } catch (error) {
        errorHandler({ error, res })
    }

})

router.post('/sing-up', async (req: Request, res: Response) => {
    const { usuario }: ISingUp = req.body
    try {
        await knex.transaction(async trx => {
            const endereco = await NovoEndereco(usuario.endereco, trx);

            const usuariosI = await NovoUsuario({ ...usuario, endereco_id: endereco.id, }, trx);

            sendResponse({
                data: usuariosI,
                code: 201,
                res
            })
        })
    } catch (error) {
        errorHandler({ error, res })
    }

});

export default router