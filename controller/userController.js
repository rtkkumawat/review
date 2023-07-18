let express = require('express');
let userSchema = require('../model/userSchema');
 
let app = express();

let createUser = async (req, res) => {
    const userData = new userSchema(req.body)
    try {
    const isUserExist = await userSchema.findOne({
        userEmail: req.body.userEmail,
    });
    if(isUserExist){
     res.status(401).json({
        message : 'User does not exist'
    })
}else{
    const user = await userData.save();
    res.status(200).json({
        success : true,
         message : 'User created successfully' ,
         createdUser : user
    })
}
    }catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        });
    }
}
module.exports = {
    createUser
}