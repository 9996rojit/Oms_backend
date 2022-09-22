import { userRegisterSchema } from "../helper/validator/input.validator";
import db from "../models";
import { user, user_id } from "../types/Common";
const { User } = require('../models/user')


export class CreateUserService {
  static async create(info: user, transactio?: any): Promise<user> {
    let payload = {}
    try {
      const validatedInput = await userRegisterSchema.validateAsync(info)
      if (validatedInput.error) {
        throw validatedInput.error
      } else {
        return await db.sequelize.transaction(async (transaction: any) => {
          try {

            payload = await User.create({ ...info }, transaction)
          }
          catch (err) {
            throw err
          }
          return payload
        })
      }
    } catch (error) {
      throw error
    }

  }
  static async update(info: user) {
    let { id, ...rest } = info
    return await db.sequelize.transaction(async (transaction: any) => {
      try {
        let result = await User.update(rest, { where: { id: id }, transaction })
        return result
      } catch (err) {
        throw err
      }
    })

  }

  static async delete(info: user_id) {
    let { id } = info;
    return db.sequelize.transaction(async (transaction: any) => {
      try {
        let result = await User.destroy({ where: { id: id }, transaction })
        return result
      } catch (err) {
        throw err
      }
    })

  }

  static async getAllUser() {
    try {
      let result = await User.findAll()
      return result

    } catch (error) {
      throw error

    }

  }



} 