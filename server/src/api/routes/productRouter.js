import Router from 'express'
import GetProductsSummary from "../../core/useCases/getProductsSummary.js";
import AddProduct from "../../core/useCases/addProduct.js";
import AddReview from "../../core/useCases/addReview.js";

const router = Router()

router.get('/', async (req, res, next) => {
    try {
        const cu = new GetProductsSummary()
        const summary = await cu.do()

        res.send(summary)
    }
    catch (err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const cu = new AddProduct()
        const p = await cu.do(req.body)

        res.send(p)
    }
    catch (err){
        next(err)
    }
})


router.post('/:id/review', async (req, res, next) => {
    try {
        const cu = new AddReview()

        let body = req.body
        body.productId = req.params.id

        const p = await cu.do(body)

        res.send(p)
    }
    catch (err){
        next(err)
    }
})


export { router }