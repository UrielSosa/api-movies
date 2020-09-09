module.exports = function(sequelize, DataTypes) {
    let alias = "Movie";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        rating: DataTypes.DOUBLE,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER
    };
    let config = {
        timestamps: true,
        underscored: true
    };

    const Movie = sequelize.define(alias, cols, config);
    return Movie;
}