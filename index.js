const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/grades', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/students', db.getUsers)
app.get('/students/:id', db.getUserById)
app.get('/grades/:id', db.getGrade)
app.post('/students:id', db.createUser)
app.put('/students/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})