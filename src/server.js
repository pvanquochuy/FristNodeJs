import express from 'express'
import configViewEngine from './configs/viewEngine'

const app = express()
const port = 3000

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