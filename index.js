const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const categories = require('./data/category.json')

app.get('/', (req, res) => {
    res.send('Learning Platform is Running.')
})

app.get('/courses-categories', (req, res) => {
    res.send(categories)
})

app.get('/courses-categories/:id', (req, res) => {
    const id = req.params.id;
    const course = categories.find(course => course.id === parseInt(id));
    res.send(course)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})