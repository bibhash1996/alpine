
import { MongoClient, Db } from 'mongodb';

let db: Db;
let mongoClient: MongoClient;

type Settings = {
    mongoConnectionURL: string,
    databaseName: string,
}

async function initialize(settings: Settings) {
    console.log(`Initializing  with settings ${JSON.stringify(settings)}`);
    mongoClient = new MongoClient(settings.mongoConnectionURL, {});
    // mongoClient = await MongoClient.connect(settings.mongoConnectionURL)
    mongoClient = await mongoClient.connect()
    db = mongoClient.db(settings.databaseName);
    console.log('Connection to mongo successfull..');
}

export {
    db,
    initialize,
    mongoClient,
}
