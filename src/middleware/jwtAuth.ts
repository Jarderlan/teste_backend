import { errorHandler } from "../controllers/CoreController";
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
require('dotenv').config()

const Secret = process.env.JWT_SECRET

export async function jwtAuthMiddleware(req: Request, res: Response, next) {
    const token = req.headers['x-access-token']
    jwt.verify(token, Secret, (error, decoded) => {
        if (error) {
            res.status(400).json(error)
        }
        req.body.usuario_id = decoded.user_id
        next();
    })

}