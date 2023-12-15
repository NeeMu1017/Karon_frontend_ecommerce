const mongoose = require("mongoose");

const userSchems = new mongoose.Schema({
    name:String,
    email:{
        type :String,
        required: true,
        unique : true
    },
    password:String,
    isLogin:Boolean
})

module.exports = mongoose.model('user',userSchems);