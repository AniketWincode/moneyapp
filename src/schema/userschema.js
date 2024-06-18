const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, "Please enter the title"],
        minlength : 10
    },

    description : {
        type : String,
        required : [true, "Please enter about title"],
        minlength : 10
    },

    dudate : {
        type : String, 
        required : [true, "Please enter the dudate"],
        minlength : 10
    },

    tags : {
        type : String,
        required : [true, "Please enter the tags"],
        minlength : 10
    },
    id : {
        type : Number,
        required : [true, "Please enter the Id"]
    }
}, {timestamps : true})

const User = mongoose.model('User', userSchema)

module.exports = User