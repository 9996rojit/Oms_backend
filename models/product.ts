'use strict';

import { DataTypes } from "sequelize";
import db from ".";
import { Company } from "./company";
import { Image } from "./image";
const { Model } = require('sequelize');

export class Product extends Model {

}
Product.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_rating: {
    type: DataTypes.STRING,
    allowNull: true
  },
  product_color: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  product_quantity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_feature: {
    type: DataTypes.JSONB,
    allowNull: false
  }
}, {
  sequelize: db.sequelize,
  modelName: 'Product',
});


Company.hasMany(Product as any, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
Product.hasMany(Image, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })