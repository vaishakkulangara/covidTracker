const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    address:String,
    phoneno:Number,
    age:Number,
    vaccinated:String,
    type:String,
    district:String,
    village:String,
    ward:String,
    email: String,
    password: String
})
module.exports = mongoose.model('User',userSchema);