// Debugging Node with Chrome Devtools

const express = require('express')
const app = express()
const past = require('./past')
const future = require('./future')
    
app.get('/:age', (req, res) => {
// debugger
    res.send(past(req.params.age, 10) + future(req.params.age, 10))
})

app.listen(3000)