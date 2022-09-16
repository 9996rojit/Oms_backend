'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize: any, DataTypes: { STRING: any; }) => {
  class Company extends Model {

    static associate(models: any) {
      // define association here
      Company.hasOne(models.User)
    }
  }
  Company.init({
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
    sequelize,
    modelName: 'Company',
  });
  return Company;
};