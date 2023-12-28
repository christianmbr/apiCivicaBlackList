import Auth from '../model/authModel.js'
import jwt from 'jsonwebtoken'
import config from '../../config.js'
//
const SECRET = config['jsonWebTokenPass']
const EXPIRESIN = config['jsonWebTokenExpiredIn']
const ADMIN_PASSWORD = config['adminPassword']

async function sigIn(name, password){
    try {
        const authFound = await Auth.findOne({ name })
        
        if (authFound) {
            if (await Auth.comparePassword(password, authFound.password)){
                const newToken = jwt.sign({ id: authFound._id }, SECRET, { expiresIn: EXPIRESIN })
                // Save token in db.
                return newToken
            }
        }
        return false
    } catch (err) {
        console.error({ err })
    }
}

async function addAdminIfDoesntExist (){
    try {
        const response = await Auth.findOne({ name: 'admin' })
        if (!response) {
            const newAdmin = new Auth({
                name: 'admin',
                password: await Auth.hashPassword(ADMIN_PASSWORD),
                token: ''
            })
            await newAdmin.save()
            console.info('Admin user have been created!')
        }
    } catch (err) {
        console.error(err.message)
    }
}

export default { sigIn, addAdminIfDoesntExist }