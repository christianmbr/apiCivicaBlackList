import authDb from '../db/authDb.js'

async function auth(req, res) {
    // Validar!
    // console.log(req.body)
    // if (req.body.hasOwnProperty('name') || req.body.hasOwnProperty('password')){
    //     console.log('good formed')
    // } else {
    //     console.log('bad formed')
    // }
    const { name, password } = req.body
    const token = await authDb.sigIn(name, password)
    return token 
    ? res.status(200).json({ response: 'Successful authentication', token })
    : res.status(401).json({ error: 'Authentication failed' })
}

export default { auth }