const mongoose = require('mongoose')
const schma = mongoose.Schema



const blogSchema = new schma({
    title :{
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