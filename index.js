import express from 'express'
import civicaRouter from './src/routes/civicaRouter.js'
import authRouter from './src/routes/authRouter.js'
import databaseConection from './src/db/databaseConection.js'

const expressApp = express()
// Port should be located in env!
const PORT = 5000

// Connection to DB.
databaseConection.connect()
    .then(db => console.log('🟢 Mongo is running! in port: 27017'))
    .catch(error => console.error(error))

expressApp.use(express.json())
expressApp.use('/api/civica', civicaRouter)
expressApp.use('/api/auth', authRouter)

expressApp.listen(PORT, () => { console.log('🚀 Server is running in port: '+ PORT) })