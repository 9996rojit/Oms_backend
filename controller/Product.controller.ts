import { Request, Response } from "express"
import { ProductService } from "../service/product.service";


export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProduct();
    res.send(result)
  } catch (error) {
    res.status(400).send(error)
  }

}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.createProduct(req.body);
    res.send(result)


  } catch (error) {
    res.status(400).send(error)
  }

}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.updateProduct(req.body);
    res.send(result)


  } catch (error) {
    res.status(400).send(error)
  }

}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.deleteProduct(req.params);
    res.send(result)
  } catch (error) {
    res.status(400).send(error)
  }

}