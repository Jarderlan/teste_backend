import express from 'express'
import cors from 'cors'
import database from './config/database'
import SingInController from './controllers/SingInController'

const app = express()
const PORT = process.env.API_PORT

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        database()
        this.express.use(SingInController)
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }
}

export default new App().express