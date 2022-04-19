import express from 'express'
import { adaptRoute } from './main/adapters/express-route-adapter'
import { makeCreateSafraController } from './main/factories/safras/create-safra'

export const app = express()

app.use(express.json())

app.post('/safras', adaptRoute(makeCreateSafraController()))
