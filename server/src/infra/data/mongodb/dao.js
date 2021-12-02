import Client from "./client.js";
import {MONGO_DB_NAME} from "../../../config.js";
import NotFoundError from "../../../core/exceptions/notFoundError.js";
import Product from "../../../core/entities/product.js";

class Dao {
    constructor(collectionName) {
        const mongoClient = Client.getClient()

        this.database = mongoClient.database(MONGO_DB_NAME)
        this.collection = this.database.collection(collectionName)
        this.collectionName = collectionName
    }

    add = async (doc) => {
        await this.collection.insertOne(doc)
    }

    getAll = async () => {
        return await this.collection.find().toArray()
    }

    getOne = async (id) => {
        const query = { id: id }
        const doc = await this.collection.findOne(query)

        if(!doc)
            throw new NotFoundError(`${this.collectionName} --> '${id}' not found`)

        return Product.set(doc)
    }

    update = async (doc) => {
        const filter = { id: doc.id };
        const options = { upsert: true };

        await this.collection.updateOne(filter, { $set: doc }, options);
    }
}

export default Dao