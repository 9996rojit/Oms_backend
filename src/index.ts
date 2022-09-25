import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express'
import docs from '../docs/index'
import { MORGAN_LOGGER, PORT } from '../utils/appConfig';
import { mainRouter } from '../router/mainRouter';
// import middleware from '../middleware';
import db from '../models'

const app = express()
app.use(cors())
app.use(express.json());
app.use(morgan(MORGAN_LOGGER))



app.use('/', mainRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server is starting at url https://localhost:${PORT} `)
  })
})