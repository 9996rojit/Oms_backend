import Joi from 'joi'


export const userRegisterSchema = Joi.object({
  user_name: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io'] } })
})