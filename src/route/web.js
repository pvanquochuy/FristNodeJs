import express from "express"
import homeController from '../controller/homController'
let router = express.Router()
const initWebRoute = (app) =>{
    router.get('/', homeController.getHomepage)

    router.get('/info', (req, res) => {
    res.send(`'I'm Quoc Huy`)
    })

    return app.use('/', router)
}

export default initWebRoute
// module.exports = initWebRoute
