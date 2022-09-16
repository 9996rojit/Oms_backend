'use strict';
import { Model } from 'sequelize';
module.exports = (sequelize: any, DataTypes: { UUID: any; UUIDV4: any; STRING: any; }) => {
  class Category extends Model {
    static associate(models: any) {
    }
  }
  Category.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category_type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};