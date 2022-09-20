'use strict';

import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcryptjs'
import db from '.';
import { Category } from './category';

// export 

export class User extends Model {

  // static associate(models: any) {
  //   console.log("🤫🤫🤫 ~ file: user.ts ~ line 12 ~ User ~ associate ~ models", models)
  //   User.hasOne(models.Category)
  // }
}
User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contact_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permission_id: {
    type: DataTypes.UUID,
    allowNull: true
  }
}, {
  sequelize: db.sequelize,
  modelName: 'User',
});

//creating relation with category table
Category.hasOne(User)
User.addHook('beforeCreate', async (user: any, options: any) => {
  console.log("🤫🤫🤫 ~ file: user.ts ~ line 61 ~ User.addHook ~ user", user)
  const salt = await bcrypt.genSaltSync(12)
  user.password = bcrypt.hashSync(user.password, salt)

  User.addHook('afterCreate', async (user: any, options: any) => {
    console.log("🤫🤫🤫 ~ file: user.ts ~ line 61 ~ User.addHook ~ user", user)
    console.log("🤫🤫🤫 ~ file: user.ts ~ line 65 ~ User.addHook ~ any", options)
  }
  )

})




// export default User