import { DataTypes } from "sequelize";
import db from "../configs/db.js";

const sequelize = db.sequelize;

const Star = sequelize.define(
	"Star",
	{
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
	},
	{ tableName: "Stars" }
);

export default Star;