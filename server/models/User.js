module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        pseudo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    }, {
        timestamps: false,
        createdAt: false,
        updatedAt: false
    })
} 