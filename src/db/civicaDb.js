import Civica from '../model/civicaModel.js'
import Auth from '../model/authModel.js'

async function get(idCivica, userId) {
    try{
        // Auth.
        const isAuth = await Auth.findById(userId)
        // Search Civica.
        const idFound = await Civica.find({ CAR_ID: idCivica })

        return idFound.length==0 ? false : true
    } catch (err) {
        console.error(err)
    }
}

export default { get }