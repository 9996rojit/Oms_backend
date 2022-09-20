import { Op } from "sequelize";
import { convertPassword } from "../helper/password.coverter";
import { TokenGenerator } from "../helper/toke.generator";
import db from "../models";
import { Category } from "../models/category";
import { Permission } from "../models/permission";
import { User } from "../models/user";
import { LoginType } from "../types/Common";
import { CompanyService } from "./Company.service";
import { CreateUserService } from "./user.service";

export class AuthService {
  static async create(info: any) {
    let payload = {}
    return db.sequelize.transaction(async (trasaction: any) => {
      try {
        const user = await CreateUserService.create({ ...info.user }, trasaction)
        const company = { ...info.company, UserId: user.id }
        const createCompany = await CompanyService.create({ ...company })
        payload = { user, createCompany }
        return
      } catch (error) {
        throw error
      }
    })
  }
  static async login(info: LoginType) {
    try {
      const { user_name } = info
      const user: any = await User.findOne({ where: { user_name: { [Op.eq]: user_name } }, raw: true })
      if (user) {
        const userPasswordCheck = await convertPassword(info.password, user.password)
        if (userPasswordCheck) {
          const userPermission = await Permission.findOne({ where: { id: { [Op.eq]: user.permission_id } }, raw: true })
          const userCategory = await Category.findOne({ where: { id: { [Op.eq]: user.CategoryId } }, attributes: ['category_name', 'category_type'], raw: true })
          const generatedToken = TokenGenerator({ ...user, CategoryId: userCategory, permission_id: userPermission })
          return generatedToken
        }
      } else {
        throw new Error(`We cannot find user with this username: ${user_name}`)
      }
    } catch (error) {
      throw error
    }

  }

}