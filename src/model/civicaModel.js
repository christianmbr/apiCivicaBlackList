import mongoose, { Schema, model } from 'mongoose'

const CivicaBlackList = new Schema({
  id: {
    type: Number,
    required: true, 
    unique: true
  }
},
{
  versionKey: false,
  timestamps: true
})

export default model('civica', CivicaBlackList)