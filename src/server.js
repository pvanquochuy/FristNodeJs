import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
// import connection from './configs/connectDB'

require('dotenv').config()
const app = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

console.log('check port: ', port);
// setuo view engine
configViewEngine(app)

// init web route
initWebRoute(app)



app.listen(port, () => {
  console.log(`Example app listening on port at  http://localhost:${port}`)
})