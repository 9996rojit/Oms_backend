import { Request, Response } from "express";
import { CompanyService } from "../service/Company.service";

export const createCompany = async (req: Request, res: Response) => {
  try {

    let result = await CompanyService.create(req.body)
    res.send(result)

  } catch (err) {
    res.status(400).send(err)
  }
}

export const updateCompany = async (req: Request, res: Response) => {
  try {

    let result = await CompanyService.update(req.body)
    res.send(result)

  } catch (err) {
    res.status(400).send(err)
  }
}

export const deleteCompany = async (req: Request, res: Response) => {
  try {

    let result = await CompanyService.delete(req.body)
    res.send(result)

  } catch (err) {
    res.status(400).send(err)
  }
}