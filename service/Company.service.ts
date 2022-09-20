import db from "../models";
import { Company } from "../models/company";
import { CompanyType, Company_id } from "../types/Common";

export class CompanyService {
  static async create(info: CompanyType) {
    let payload = {}
    await db.sequelize.transaction(async (transaction: any) => {
      transaction.afterCommit(async (transaction: any) => {
        try {
          payload = await Company.create({ ...info })

        } catch (error) {
          throw error
        }

      })
      return payload
    })
  }

  static async update(info: CompanyType) {
    let { id, ...rest } = info;
    return await db.sequelize.transaction(async (transaction: any) => {
      try {
        return await Company.update(rest, { where: { id: id }, transaction })
      } catch (err) {
        throw err
      }
    })
  }

  static async delete(info: Company_id) {
    let { id } = info
    return db.sequelize.transaction(async (transaction: any) => {
      try {
        return await Company.destroy({ where: { id: id }, transaction })
      } catch (err) {
        throw err
      }
    })
  }

}