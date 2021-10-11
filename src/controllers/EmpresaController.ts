import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { NovaEmpresa } from '../services/EmpresaService'
import { IEmpresa } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'

const router = Router()

router.post('/empresa', async (req: Request, res: Response) => {
    const { nome, cnpj, descricao }: IEmpresa = req.body

    try {
        knex.transaction(async trx => {
            const empresa = await NovaEmpresa({ nome, cnpj, descricao }, trx)
            sendResponse({
                data: empresa,
                code: 200,
                res
            })
        })
    } catch (error) {
        errorHandler({ error, res })
    }
})

export default router