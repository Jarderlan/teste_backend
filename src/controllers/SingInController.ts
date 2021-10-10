import { Request, Response, Router } from 'express'
import Enderecos from '../models/Enderecos'
import Usuarios from '../models/Usuarios'
import { ISingIn } from '../types/entities'
const router = Router()

router.get('/teste', async (req: Request, res: Response) => {
    res.status(200).json('testando 123');
});

router.post('/sing-in', async (req: Request, res: Response) => {
    const { usuario }: ISingIn = req.body
    try {
        const endereco = await Enderecos.query().insert({
            cep: usuario.endereco.cep,
            logradouro: usuario.endereco.logradouro,
            bairro: usuario.endereco.bairro,
            localidade: usuario.endereco.localidade,
            uf: usuario.endereco.uf,
            numero: usuario.endereco.numero,
            complemento: usuario.endereco.complemento,
            ibge: usuario.endereco.ibge
        })

        const usuariosI = await Usuarios.query().insert({
            ...usuario,
            endereco_id: endereco.id,
        })
        res.status(200).json(usuariosI);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }

});

export default router