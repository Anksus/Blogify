const express = require('express')
const app = express()
const homeRouter = require('./controller/home')



app.use(homeRouter)



const port = 3000
app.listen(port,()=>{
    console.log("server's UP")
})