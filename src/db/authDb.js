import Auth from '../model/authModel.js'
import jwt from 'jsonwebtoken'

const SECRET = 'thisismysecretword@'
const EXPIRESIN = '60m'

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

export default { sigIn }