'use strict';

import { DataTypes } from "sequelize";
import db from ".";

const { Model } = require('sequelize');

export class Permission extends Model {

}
Permission.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  permission_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permission_role: {
    type: DataTypes.JSONB,
    allowNull: false
  },
}, {
  sequelize: db.sequelize,
  modelName: 'Permission',
});
