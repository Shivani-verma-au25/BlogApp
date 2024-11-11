const mongoose = require('mongoose')


mongoose.set("strictQuery",false)

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Server is Connect To mongo db"); 
})
.catch((e) => {
    console.log("Error from  Mongo Db :- ",e);    
})
