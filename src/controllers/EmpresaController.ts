import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { jwtAuthMiddleware } from '../middleware/jwtAuth'
import { novaEmpresa } from '../services/EmpresaService'
import { IEmpresa } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'

const router = Router()

router.post('/empresa', jwtAuthMiddleware, async (req: Request, res: Response) => {
    const { nome, cnpj, descricao }: IEmpresa = req.body

    try {
        await knex.transaction(async trx => {
            const empresa = await novaEmpresa({ nome, cnpj, descricao }, trx)
            sendResponse({
                data: empresa,
                code: 201,
                res
            })
        })
    } catch (error) {
        errorHandler({ error, res })
    }
})

export default router