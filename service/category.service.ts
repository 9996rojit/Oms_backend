import db from "../models";
const Category = require('../models/category').Category
import { categoryType, category_id } from "../types/Common";



export class CategoryService {
  static async create(info: categoryType): Promise<categoryType> {
    let payload = {};
    const { category_name } = info
    try {
      const category_list = await Category.findOne({ where: { category_name } })
      if (category_list) {
        throw new Error("Category already exist with this category name");
      }
      else {
        return await db.sequelize.transaction(async (transaction: any) => {
          try {
            payload = await Category.create({ ...info })
          } catch (err) {
            throw err
          }
          return payload
        })
      }
    } catch (error) {
      throw error
    }
  }

  static async update(info: categoryType) {
    let { id, ...rest } = info;
    return await db.sequelize.transaction(async (transaction: any) => {
      try {
        return await Category.update(rest, { where: { id: id }, transaction })
      } catch (err) {
        throw err
      }
    })
  }

  static async delete(info: category_id) {
    let { id } = info
    return db.sequelize.transaction(async (transaction: any) => {
      try {
        return await Category.destroy({ where: { id: id }, transaction })
      } catch (err) {
        throw err
      }
    })
  }

  static async getAllCategory() {
    try {
      const category = await Category.findAll();
      return category
    } catch (err) {
      throw err
    }
  }

}