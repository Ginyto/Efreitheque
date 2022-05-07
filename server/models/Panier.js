module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Panier', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        id_livre: {
            type: DataTypes.INTEGER,
            allowNull: false
        }



    }, {
        timestamps: true,
        createdAt: false,
        updatedAt: false
    })
} 