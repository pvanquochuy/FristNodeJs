import express from "express"
import homeController from '../controller/homeController'
let router = express.Router()
const initWebRoute = (app) =>{
    router.get('/', homeController.getHomepage)
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
   
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.getEditPage)
    router.post('/update-user', homeController.postUpdateUser)
    
    router.get('/info', (req, res) => {
    res.send(`'I'm Quoc Huy`)
    })

    return app.use('/', router)
}

export default initWebRoute
// module.exports = initWebRoute
