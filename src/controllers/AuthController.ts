import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { jwtAuthMiddleware } from '../middleware/jwtAuth'
import { singIn } from '../services/AuthService'
import { ISingIn } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'

const router = Router()

router.post('/sing-in', async (req: Request, res: Response) => {
    const { email, password }: ISingIn = req.body
    try {
        const token = await singIn({ email: email, password: password })
        sendResponse({
            data: token,
            code: 200,
            res
        })
    } catch (error) {
        errorHandler({ error, res })
    }
})

export default router