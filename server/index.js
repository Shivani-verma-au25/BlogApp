require('dotenv').config()
const exprees = require('express')
const app = exprees()


app.get('/',(req,res) => {
    res.send('hello ice tea');
    
})

app.listen(process.env.PORT ,() => {
    console.log(`Your Server is Running At ${process.env.PORT}`);
    
})