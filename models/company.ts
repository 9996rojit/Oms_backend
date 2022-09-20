'use strict';
import { DataTypes, Model } from 'sequelize';
import db from '.';
import { User } from './user';

export class Company extends Model {

}
Company.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  company_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company_location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company_reg_no: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company_contact: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company_email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db.sequelize,
  modelName: 'Company',
});

User.hasOne(Company, { onDelete: "CASCADE", onUpdate: "CASCADE" })