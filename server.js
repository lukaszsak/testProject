let express = require('express')

let app = express()

app.get('/',function(req,res){
    console.log('zadanie /')
    res.send('to jest strona glowna')
})


app.listen(3000)