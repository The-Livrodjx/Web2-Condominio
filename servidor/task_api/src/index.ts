import "reflect-metadata";
import { createConnection } from 'typeorm'
import * as express from "express";
import routes from "./routes";
const cs = require('cors');
const app = express();

createConnection()
app.use(cs())
app.use(express.json())
app.use(routes)
app.listen(3333)
