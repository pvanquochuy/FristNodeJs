const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/info', (req, res) => {
    res.send(`'I'm Quoc Huy`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port at  http://localhost:${port}`)
})