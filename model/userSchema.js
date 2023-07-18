const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userName :{
        type : String,
        required : true,
    },
    userEmail :{
        type : String,
        required : true,
    },
    userPhone :{
        type : Number,
        required : true,
    }
})
userSchema.set("timestamps",true)
module.exports = new mongoose.model("user",userSchema)