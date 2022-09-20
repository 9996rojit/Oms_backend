'use strict';
import { DataTypes, Model } from 'sequelize';
import db from '.';

// export

export class Category extends Model {
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
  sequelize: db.sequelize,
  modelName: 'Category',
});

