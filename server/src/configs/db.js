import { Sequelize } from "sequelize";

const db = {};

const sequelize = new Sequelize('sqlite::memory:')

db.sequelize = sequelize;

export default db;