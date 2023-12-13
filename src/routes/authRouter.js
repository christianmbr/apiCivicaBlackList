import express from 'express'
import authController from '../controller/authController.js'

const civicaRouter = express.Router()

civicaRouter.post('/', authController.auth)

export default civicaRouter