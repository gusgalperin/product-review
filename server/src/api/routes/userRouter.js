import Router from 'express'
import AddUser from "../../core/useCases/addUser.js";

const router = Router()

router.post('/', async (req, res, next) => {
    try{
        const cu = new AddUser()
        const user = await cu.do(req.body)
        res.send(user)
    }
    catch(err){
        next(err)
    }
})

export { router }