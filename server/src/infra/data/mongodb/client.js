import { MongoClient } from "mongodb"
import {MONGO_URI} from "../../../config.js";

class PrivateClient{
    constructor(){
        this.mongoClient = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    }

    database(dbName){
        return this.mongoClient.db(dbName)
    }

    async connect(){
        await this.mongoClient.connect()
    }

    async disconnect(){
        await this.mongoClient.close()
    }
}

class Client{

    constructor(){ }

    static getClient(){

        if (!Client.instance){
            Client.instance = new PrivateClient()
        }

        return Client.instance;
    }
}

export default Client