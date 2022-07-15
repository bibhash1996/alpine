require('dotenv').config();
import express from 'express';
import { initialize } from './init';
import Routes from './routes';
import mw from './middleware';
import cors from "cors";

const settings = {
    port: Number(process.env.PORT) || 8080,
    mongoConnectionURL: process.env.MONGO_CONNECTION_URL!,
    databaseName: process.env.MONGO_DB_NAME!,
}

const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(express.urlencoded({ extended: true }));
app.use(
    express.json({
        verify: (req: any, res, buf) => {
            req.rawBody = buf;
        },
    })
);

app.use(express.json(), mw.jsonParserErrorHandler);
app.use(cors());

app.use(mw.addCustomMethodsToResponse);
app.use("/api", Routes)
app.use(mw.exceptionHandler);

initialize(settings).then(
    () => {
        app.listen(settings.port, () => {
            console.log(`Server started on ${settings.port}`)
        });
    }
)
