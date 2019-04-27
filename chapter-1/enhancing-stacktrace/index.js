const express = require('express')
const routes = require('./routes')
const app = express()

// Add routes to express application
app.use(routes)
app.listen(3000)