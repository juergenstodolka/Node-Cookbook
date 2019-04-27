// Set the stack trace to Infinity in development.
// So we cann see the complete stack in error cases.
if (process.env.NODE_ENV !== 'production') {
    Error.stackTraceLimit = Infinity
}

const express = require('express')
const routes = require('./routes')
const app = express()

// Add routes to express application
app.use(routes)
app.listen(3000)