import { DataTypes } from "sequelize";
import db from "../configs/db.js";

const sequelize = db.sequelize;

const User = sequelize.define(
	"User",
	{
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
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