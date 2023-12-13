import express from 'express'
import civicaController from '../controller/civicaController.js'
import { authToken } from '../middleware/authMiddleware.js'

const civicaRouter = express.Router()

civicaRouter.route('/:idCivica').get(authToken, civicaController.getCivica)

export default civicaRouter