import { user } from "../types/Common";

export const CreateUserService = async (user: user): Promise<user> => {

  return {
    user_name: "Rojit0090",
    first_name: 'Rojit',
    last_name: 'baskota',
    password: "2adsdadaasd5545as4da5dasd84ad8a4d",
    contact_number: '9861339996',
    email: 'rojit.baskota@dhunitech.io'

  }
}