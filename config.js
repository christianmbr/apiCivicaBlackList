import dotenv from 'dotenv'

dotenv.config()

export default {
    jsonWebTokenPass: process.env.JSONWEBTOKEN_SECRET_PASS,
    jsonWebTokenExpiredIn: '60m',
    headerDefaultName: 'access-token',
    mongoURL: process.env.MONGO_URL,
    mongoConnectConfig: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    adminPassword: process.env.ADMIN_PASSWORD
}
