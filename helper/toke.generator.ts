import jwt from 'jsonwebtoken'
import { loginResponse, user } from "../types/Common";
import { JSON_SECRET_KEY } from '../utils/appConfig';


const generateToken = (user: user) => {
  const token = jwt.sign({
    data: {
      user_name: user.user_name,
      first_name: user.first_name,
      last_name: user.last_name,
      id: user.id,
      category: user.CategoryId,
      permission: user.permission_id
    }
  }, JSON_SECRET_KEY as string, { expiresIn: 60 * 60 });

  return token
}

export const TokenGenerator = async (user: user): Promise<loginResponse> => {
  return {
    token: generateToken(user)
  }

}


