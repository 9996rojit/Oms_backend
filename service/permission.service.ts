import { Transaction } from "sequelize";
import db from "../models";
import { Permission } from "../models/permission";
import { PermissionType } from "../types/Common";

export class PermissonService {
  static async create(info: PermissionType) {
    const { permission_name } = info
    try {
      const permission_list = Permission.findOne({ where: { permission_name } })
      if (permission_list) {
        throw new Error("Permission already exist please create new Permission")
      }
      else {
        return db.sequelize.transaction(async (transaction: any) => {
          await Permission.create({ ...info })
        })
      }

    } catch (error) {
      throw error;
    }
  }
  static async update(info: PermissionType) {
    const { id, ...rest } = info
    try {
      return db.sequelize.transaction(async (transaction: any) => {
        await Permission.update(rest, { where: { id: id }, transaction })
      })
    } catch (error) {
      throw error
    }
  }

}