import express from 'express'
import { router as productRouter } from './api/routes/productRouter.js'
import { router as userRouter } from './api/routes/userRouter.js'
import {errorHandling} from "./api/middlewares/errorHandling.js";
import {PORT} from "./config.js";

class Server {

    constructor() {
        const app = express()

        app.use(express.json())

        app.use((req, res, next) => {
            res.append('Access-Control-Allow-Origin', ['*']);
            res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.append('Access-Control-Allow-Headers', 'Content-Type');
            next()
        })

        app.use('/api/products', productRouter)
        app.use('/api/users', userRouter)

        app.use(errorHandling)

        this.app = app
    }

    connect(){
        return new Promise((resolve, reject) => {
            this.server = this.app.listen(PORT)
            console.log(`server listening in port ${PORT}`)
            this.server.on('listening', () => { resolve(this.server.address().port) })
            this.server.on('error', (error) => { reject(error) })
        })
    }

    disconnect() {
        return new Promise((resolve, reject) => {
            this.server.close(error => {
                if (error) {
                    reject()
                } else {
                    resolve()
                }
            })
        })
    }

}

export default Server