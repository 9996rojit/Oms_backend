import express from 'express';
export const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.send({ status: 200, message: "this is first route of an application" })
})
mainRouter.post('/register/', userService)