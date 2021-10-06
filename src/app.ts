import express from 'express'
import cors from 'cors'
import database from './config/database'

const app = express()
const PORT = process.env.API_PORT

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middlewares()
        database()
        this.routes()
    }

    private middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private routes() {
        this.express.get('/', (req, res) => {
            return res.send('Coisou pivete')
        })
    }
}

export default new App().express