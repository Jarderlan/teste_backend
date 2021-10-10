import { Request, Response, Router } from 'express'
import { NovoEndereco } from '../services/EnderecoService'
import { NovoUsuario } from '../services/UsuarioService'
import { ISingIn } from '../types/entities'
import { errorHandler, sendResponse } from './CoreController'
const router = Router()

router.get('/teste', async (req: Request, res: Response) => {
    res.status(200).json('testando 123');
});

router.post('/sing-in', async (req: Request, res: Response) => {
    const { usuario }: ISingIn = req.body
    try {
        const endereco = await NovoEndereco(usuario.endereco)

        const usuariosI = await NovoUsuario({
            ...usuario,
            endereco_id: endereco.id,
        })
        sendResponse({
            data: usuariosI,
            code: 200,
            res
        })
    } catch (error) {
        errorHandler({ error, res })
    }

});

export default router