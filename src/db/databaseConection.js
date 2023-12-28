import mongoose from 'mongoose'
import config from '../../config.js'
// 
const url = config['mongoURL']
const mongoConnectConfig = config['mongoConnectConfig']

function connect() {
    return mongoose.connect(url, mongoConnectConfig)
}

export default { connect }