const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

const courses = require('./data/courses.json')
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('Learning Platform is Running.')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(course => course.id === parseInt(id));
    res.send(course)
})

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});

app.get('/courses-categories/:id', (req, res) => {
    const id = req.params.id;
    if (id === "4") {
        res.send(courses);
    }
    else {
        const category_course = courses.filter(c => c.category_id === parseInt(id));
        res.send(category_course);
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})