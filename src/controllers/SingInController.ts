import { Request, Response, Router } from 'express'
import { SingIn } from '../types/entities'
const router = Router()

router.get('/teste', async (req: Request, res: Response) => {
    res.status(200).json('testando 123');
});

router.post('/sing-in', async (req: Request, res: Response) => {
    const { usuario }: SingIn = req.body
    res.status(200).json(usuario);
});

export default router