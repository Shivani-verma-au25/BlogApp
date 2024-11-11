require('dotenv').config()
const exprees = require('express')
const cors = require('cors')
const blogRouter = require('./routers/blog-routes')
require('./db/database')

const app = exprees()

app.use(cors())
app.use(exprees.json())

app.use('/api/blogs' , blogRouter)


app.use('/api',(req,res) => {
    res.send("hello world")
})

app.listen(process.env.PORT ,() => {
    console.log(`Your Server is Running At ${process.env.PORT}`);
    
}) 