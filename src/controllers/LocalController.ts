import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { ILocais } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'
import { novoEndereco } from '../services/EnderecoService'
import { getLocal, novoLocal } from '../services/LocaisService'
import { jwtAuthMiddleware } from '../middleware/jwtAuth'

const router = Router()
router.get('/local/:id', jwtAuthMiddleware, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id) ?? 0

    const local = await getLocal(id)

    sendResponse({
        data: local,
        code: 200,
        res
    })
})

router.post('/local', jwtAuthMiddleware, async (req: Request, res: Response) => {
    const { nome, principal, endereco, empresa, usuario, usuario_id }: ILocais = req.body

    try {
        await knex.transaction(async trx => {
            const endLocal = await novoEndereco(endereco, trx);

            const local = await novoLocal({
                nome: nome,
                endereco_id: endLocal.id
            }, trx);

            await trx('empresa_locais')
                .insert({
                    empresa_id: empresa.id,
                    local_id: local.id
                })

            await trx('local_responsaveis')
                .insert({
                    local_id: local.id,
                    user_id: usuario.id ?? usuario_id,
                    principal: principal
                })

            sendResponse({
                data: local,
                code: 201,
                res
            })
        })
    } catch (error) {
        errorHandler({ error, res })
    }
})

export default router