import jwt from 'jsonwebtoken'
import config from '../../config.js'

const SECRET = config['jsonWebTokenPass']
const HEADER_NAME = config['headerDefaultName']

export async function authToken (req, res, next) {
  try {
    const headerToken = req.headers[HEADER_NAME]
    if (!headerToken) { return res.status(401).json({ error: 'No token provided'}) }

    const decode = jwt.verify(headerToken, SECRET)
    
    req.userId = decode.id

    next()
  } catch (error) {
    return res.status(401).json({ error: error.message })
  }
}
