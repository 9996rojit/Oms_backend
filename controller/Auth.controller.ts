import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    let result = await AuthService.create(req.body)
    res.send(result)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    let result = await AuthService.login(req.body)
    res.send(result)

  } catch (error) {
    res.status(400).send(error)
  }
}