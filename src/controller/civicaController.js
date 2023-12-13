import civicaDb from '../db/civicaDb.js'

async function getCivica (req, res) {
    // Validar solo numeros.
    const idCivica = req.params.idCivica
    const regExOnlyNumbers = /^[0-9]+$/
    if(!regExOnlyNumbers.test(idCivica)){
        return res.status(400).json({ error: 'The field must be numeric.'})
    }

    const response = await civicaDb.get(idCivica, req.userId)
    return response
        ? res.status(200).json({ response })
        : res.status(404).json({ response })
}

export default { getCivica }