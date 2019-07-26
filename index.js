const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`Server is listening on ${port}`)
})