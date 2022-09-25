import { Op } from "sequelize";
import db from "../models";
import { Product } from "../models/product"
import { ProductInterface, Product_id } from "../types/Common";



export class ProductService {

  static async getAllProduct() {
    try {
      const product = await Product.findAll();
      return product

    } catch (error) {
      throw error
    }
  }

  //creating product
  static async createProduct(info: ProductInterface) {
    try {
      const productExist = await Product.findOne({ where: { product_name: { [Op.eq]: info.product_name } } })
      if (productExist) {
        throw new Error("You already have this product would you like to update it")
      }
      else {
        let payload = {}
        return db.sequelize.transaction(async (transaction: any) => {
          try {
            const product = await Product.create({ ...info }, transaction)
            payload = product
            return payload
          } catch (error) {
            throw error
          }
        })
      }
    } catch (error) {
      throw error
    }
  }

  //update product

  static async updateProduct(info: ProductInterface) {
    const { id, ...rest } = info
    try {
      const product = await Product.findOne({ where: { id: { [Op.eq]: info.id } } })
      if (!product) {
        throw new Error("You don't have product with provided id please check once again")
      }
      else {
        let payload = {}
        try {
          return db.sequelize.transaction(async (transaction: any) => {
            const updatedProduct = await Product.update(rest, { where: { id: { [Op.eq]: id } } }, transaction)
            payload = updatedProduct
            return payload
          })

        } catch (error) {
          throw error
        }
      }
    } catch (error) {
      throw error
    }
  }
  static async deleteProduct(info: Product_id) {
    try {
      const productList = await Product.findOne({ where: { id: { [Op.eq]: info.id } } })
      if (!productList) {
        throw new Error("Product with specified id does not exist")
      }
      else {
        return db.sequelize.transaction(async (transaction: any) => {
          const result = await Product.destroy({ where: { id: { [Op.eq]: info.id } } }, transaction)
          return result
        })

      }

    } catch (error) {
      throw error
    }
  }

}