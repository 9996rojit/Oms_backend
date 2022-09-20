require('dotenv').config()
export const MORGAN_LOGGER: string = 'tiny'
export const PORT: Number = 4000
export const DATABASE_NAME = process.env.DB_NAME
export const USER_NAME = process.env.DB_USER
export const DATABASE_PASS = process.env.DB_PASS
export const DATABASE_HOST = process.env.DB_HOST
export const DATABASE_DEL = process.env.DB_DEL

export const JSON_SECRET_KEY = process.env.JWT_SECRET_KEY

