const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  uid:String,
  name:String,
  msg:String,
  reply:String,
  toId:String,
})
 module.exports = mongoose.model('Message',messageSchema);