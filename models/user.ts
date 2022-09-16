'use strict';

import { Model } from 'sequelize';
import bcrypt from 'bcryptjs'
import { user } from '../types/Common';

module.exports = (sequelize: any, DataTypes: { UUID: any; UUIDV4: any; STRING: any; }) => {
  class User extends Model {

    static associate(models: any) {
      User.hasOne(models.Category)
    }
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
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', async (user: any, options: any) => {
    user.password = await bcrypt.genSalt(12, async (err, salt) => {
      await bcrypt.hashSync(user.password, salt)

    })
    User.addHook('afterCreate', async (user: any, options: any) => {
      console.log("🤫🤫🤫 ~ file: user.ts ~ line 61 ~ User.addHook ~ user", user)
      console.log("🤫🤫🤫 ~ file: user.ts ~ line 65 ~ User.addHook ~ any", options)
    })

  })
  return User;
};


