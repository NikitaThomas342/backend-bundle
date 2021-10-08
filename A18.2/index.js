const express = require('express')
const app = express()
const router = express.Router()
const calc = require('./calculator')

app.get('/add', (req,res) => {
    console.log(req.query)
    res.end(calc.add(req.query.a, req.query.b).toString())
})

app.get('/minus', (req,res) => {
    console.log(req.query)
    res.end(calc.minus(req.query.a, req.query.b).toString())
})

app.get('/multiply', (req,res) => {
    console.log(req.query)
    res.end(calc.multiply(req.query.a, req.query.b).toString())
})

app.get('/divide', (req,res) => {
    console.log(req.query)
    res.end(calc.divide(req.query.a, req.query.b).toString())
})

app.use('/', router)

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('.... port' + listener.address().port)
})