import { DataTypes } from "sequelize";
import db from "../configs/db.js";

const sequelize = db.sequelize;

const User = sequelize.define(
	"User",
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	},
	{ tableName: "Users" }
);

export default User;

// {
//     "email": "",
//     "username": "",
//     "password": "",
//     "confirmPassword": ""
// }