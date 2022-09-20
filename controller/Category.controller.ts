import { Request, Response } from "express";
import { CategoryService } from "../service/category.service";

export const createCategory = async (req: Request, res: Response) => {
  try {
    let result = await CategoryService.create(req.body);

    res.send(result);
  } catch (ex) {
    console.log(ex);
    res.status(400).send(ex);
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  try {
    let result = await CategoryService.update(req.body)
    res.send(result)
  }
  catch (err) {
    res.status(400).send(err)
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    let result = await CategoryService.delete(req.params)
    res.send(result)
  }
  catch (err) {
    res.status(400).send(err)
  }
}

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    let result = await CategoryService.getAllCategory()
    res.send(result)
  }
  catch (err) {
    res.status(400).send(err)
  }
}