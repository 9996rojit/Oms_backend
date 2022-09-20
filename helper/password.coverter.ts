import bcrypt from 'bcryptjs'
export const convertPassword = async (enteredPassword: string, password: string): Promise<boolean> => {
  const comparedPassword = await bcrypt.compareSync(enteredPassword, password)
  if (comparedPassword) {
    return true
  } else {
    return false
  }
}