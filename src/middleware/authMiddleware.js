import jwt from 'jsonwebtoken'

const SECRET = 'thisismysecretword@'

export async function authToken (req, res, next) {
  try {
    const headerToken = req.headers['access-token']
    if (!headerToken) { return res.status(401).json({ error: 'No token provided'}) }

    const decode = jwt.verify(headerToken, SECRET)
    
    req.userId = decode.id

    next()
  } catch (error) {
    return res.status(401).json({ error: error.message })
  }
}