import { Request, Response } from "express";
import { CreateUserService } from "../service/user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    let result = await CreateUserService.create(req.body);

    res.send(result);
  } catch (ex) {
    console.log(ex);
    res.status(400).send(ex);
  }
}
export const updateUser = async (req: Request, res: Response) => {
  try {
    let result = await CreateUserService.update(req.body);

    res.send(result);
  } catch (ex) {
    console.log(ex);
    res.status(400).send(ex);
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    let result = await CreateUserService.delete(req.params);

    res.send(result);
  } catch (ex) {
    console.log(ex);
    res.status(400).send(ex);
  }
}

export const getAllUser = async (req: Request, res: Response) => {
  try {
    let result = await CreateUserService.getAllUser();
    res.send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}