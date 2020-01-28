const express = require('express')
const app = express()
const port = 3000
var user = require('./routes/user')

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/user',user)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))