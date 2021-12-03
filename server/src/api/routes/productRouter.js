import Router from 'express'
import GetProductsSummary from "../../core/useCases/getProductsSummary.js";
import AddProduct from "../../core/useCases/addProduct.js";
import AddReview from "../../core/useCases/addReview.js";
import DaoProducts from "../../infra/data/mongodb/daoProducts.js";
import DeleteProduct from "../../core/useCases/deleteProduct.js";
import EditProduct from "../../core/useCases/editProduct.js";

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

router.get('/:id', async (req, res, next) => {
    try {
        const dao = new DaoProducts()
        const p = await dao.getOne(req.params.id)
        res.send(p)
    }
    catch(err){
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const cu = new DeleteProduct()
        await cu.do(req.params.id)
        res.send()
    }
    catch(err){
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const cu = new EditProduct()

        let body = req.body
        body.id = req.params.id

        const p = await cu.do(body)

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