const express = require('express')
const router = express()

router.get('/',(req,res)=>{
    res.send("Hello world, We are blogify!")
})



module.exports = router