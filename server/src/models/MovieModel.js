import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");

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
                isIn: [[ 'VHS', 'DVD', 'Blu-ray' ]],
            }
        },
		stars: {
            field: 'Stars',
            type: DataTypes.STRING,
            set(val) {
                const stars = val.split(',').map(star => star.trim());
                this.setDataValue('Stars', stars);
            }
        },
	},
	{ tableName: "Movies" }
);

await Movie.sync();

export default Movie;