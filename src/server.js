import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()
const app = express()
const port = process.env.PORT

console.log('check port: ', port);
configViewEngine(app)

app.get('/', (req, res) => {
  res.render('index.ejs')
})


app.get('/info', (req, res) => {
    res.send(`'I'm Quoc Huy`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port at  http://localhost:${port}`)
})