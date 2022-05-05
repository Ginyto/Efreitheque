module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Livre', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        auteur: {
            type: DataTypes.STRING,
            allowNull: false
        },

        publication: {
            type: DataTypes.STRING,
            allowNull: false
        },

        couverture: {
            type: DataTypes.STRING,
            allowNull: false
        },

        quantite: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
} 