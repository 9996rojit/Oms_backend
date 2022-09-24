import Joi from 'joi'


export const userRegisterSchema = Joi.object({
  user_name: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'io'] } }),
  CategoryId: Joi.string().required(),
  contact_number: Joi.string().regex(/^[0-9]{10}$/).length(10).required()
})


export const CategotySchema = Joi.object({
  category_name: Joi.string().required()
})

export const CompanyScheme = Joi.object({
  company_name: Joi.string().required(),
  company_location: Joi.string().required(),
  company_reg_no: Joi.string().regex(/^[0-9]{10}$/).length(10).required(),
  company_contact: Joi.string().regex(/^[0-9]{10}$/).length(10).required(),
  company_email: Joi.string().required(),
  UserId: Joi.string().required()
})