'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.ts')[env];
const db: any = {};


let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config, { logging: false, timezone: "+05:45" });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, { logging: false, timezone: "+05:45" });
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db