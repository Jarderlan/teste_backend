import express from 'express'
import cors from 'cors'
import database from './config/database'
import SingUpController from './controllers/SingUpController'
import EmpresaController from './controllers/EmpresaController'
import LocalController from './controllers/LocalController'
import AuthController from './controllers/AuthController'

const app = express()
const PORT = process.env.API_PORT

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        database()
        this.express.use(SingUpController)
        this.express.use(EmpresaController)
        this.express.use(LocalController)
        this.express.use(AuthController)
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }
}

export default new App().express