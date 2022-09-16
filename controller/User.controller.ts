import { Request, Response } from "express";

const createUser = async (req: Request, res: Response) => {
  try {

    try {
      let result = await CreateUserService.create(req.body);

      res.send(result);
    } catch (ex) {
      console.log(ex);
      res.status(400).send(ex);
    }

  } catch (err) {

  }
}