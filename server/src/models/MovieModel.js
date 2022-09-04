import { DataTypes } from "sequelize";
import db from "../configs/db.js";

const sequelize = db.sequelize;

const Movie = sequelize.define(
	"Movie",
	{
		title: {
            field: 'Title',
			type: DataTypes.STRING,
			allowNull: false,
		},
		releaseDate: {
            field: 'Release Year',
			type: DataTypes.DATEONLY,
		},
		format: {
            field: 'Format',
            type: DataTypes.STRING,
            validate: {
                isIn: [[ 'VHS', 'DVD', 'Blu-Ray' ]],
            }
        },
	},
	{ tableName: "Movies" }
);

export default Movie;