import express from 'express';
import { createCategory, deleteCategory, getAllCategory, updateCategory } from '../controller/Category.controller';
import { createCompany } from '../controller/Company.controller';
import { login, register } from '../controller/Auth.controller';
import { createUser, deleteUser, getAllUser, updateUser } from '../controller/User.controller'
export const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.send({ status: 200, message: "this is first route of an application" })
})

//category router start
mainRouter.get('/get-all-category/', getAllCategory)
mainRouter.post('/create-category/', createCategory)
mainRouter.put('/update-category/', updateCategory)
mainRouter.delete('/delete-category/:id', deleteCategory)
//category route end

mainRouter.post('/create-user/', createUser)
mainRouter.put('/update-user', updateUser)
mainRouter.delete('/delete-user/:id', deleteUser)
mainRouter.get('/get-all-user/', getAllUser)

mainRouter.post('/create-company/', createCompany)

mainRouter.post('/register/', register)
mainRouter.post('/login/', login)
