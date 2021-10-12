import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { ILocais } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'
import { NovoEndereco } from '../services/EnderecoService'
import { getLocal, NovoLocal } from '../services/LocaisService'
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
    const { nome, principal, endereco, empresa, usuario }: ILocais = req.body
    try {
        await knex.transaction(async trx => {
            const endLocal = await NovoEndereco(endereco, trx);

            const local = await NovoLocal({ nome: nome, endereco_id: endLocal.id }, trx);

            const localEmpresa = await trx('empresa_locais').insert({
                empresa_id: empresa.id,
                local_id: local.id
            })

            const localResponsavel = await trx('local_responsaveis').insert({
                local_id: local.id,
                user_id: usuario.id,
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