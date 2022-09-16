import { DATABASE_DEL, DATABASE_HOST, DATABASE_NAME, DATABASE_PASS, USER_NAME } from "../utils/appConfig";

module.exports = {
  "development": {
    "username": USER_NAME,
    "password": DATABASE_PASS,
    "database": DATABASE_NAME,
    "host": DATABASE_HOST,
    "dialect": DATABASE_DEL
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
