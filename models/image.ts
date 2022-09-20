'use strict';

import { DataTypes } from "sequelize";
import db from ".";

const { Model } = require('sequelize');

export class Image extends Model {

}
Image.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  image_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db.sequelize,
  modelName: 'Image',
});
