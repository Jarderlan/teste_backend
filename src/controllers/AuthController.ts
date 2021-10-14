import { Request, Response, Router } from 'express'
import { knex } from '../config/database'
import { jwtAuthMiddleware } from '../middleware/jwtAuth'
import { signIn } from '../services/AuthService'
import { ISingIn } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'

const router = Router()

router.post('/sign-in', async (req: Request, res: Response) => {
    const { email, password }: ISingIn = req.body
    try {
        const token = await signIn({
            email: email,
            password: password
        })

        sendResponse({
            data: token,
            code: 200,
            res
        })
    } catch (error) {
        errorHandler({ error, res })
    }
})

router.get('/valida-token', jwtAuthMiddleware, async (req: Request, res: Response) => {
    const token = req.headers['x-access-token']
    sendResponse({
        data: {
            token: token,
            status: true
        },
        code: 200,
        res
    })
})

export default router