const express = require('express')
const app = express()
const port = 3000
var user = require('./app/routes/user')
var db = require('./config/db')
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/user',user)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))