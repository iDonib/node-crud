const express = require('express')
const mongoose = require('mongoose')
const app = express()

//routes
app.get('/', (req, res) => {
    res.send("Hello pee0ps")
})

app.get('/blog', (req, res) => {
    res.send("Hello blog, I am Donib. Nice to meet you.")
})


mongoose.
connect('mongodb+srv://admin:code@donibapi.qqipmei.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to mongoDB")
    app.listen(3000, ()=> {
        console.log('Node API is currently running on port 3000')
    });
    
}).catch(() => {
    console.log(error)
})