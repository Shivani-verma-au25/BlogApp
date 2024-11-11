const mongoose = require('mongoose')
const schma = mongoose.Schema



const blogSchema = new schma({
    type :{
        type:String
    },
    description : {
        type :String 
    },
    date : {
        type : Date,
        default : Date.now() 
    }
})

module.exports = mongoose.model("Blog" ,blogSchema)