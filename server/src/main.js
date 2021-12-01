import Server from "./server.js";
import Client from './infra/data/mongodb/client.js'

const server = new Server()

try {
    await server.connect()
    const mongoClient = Client.getClient()
    await mongoClient.connect()
}
catch {
    console.log('ups, there was an error...')
}