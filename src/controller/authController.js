import authDb from '../db/authDb.js'

async function auth(req, res) {
    const { name, password } = req.body
    const token = await authDb.sigIn(name, password)
    return token 
    ? res.status(200).json({ response: 'Successful authentication', token })
    : res.status(401).json({ error: 'Authentication failed' })
}

export default { auth }