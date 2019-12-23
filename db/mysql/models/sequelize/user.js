
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(60)
        },
        firstName: {
            type: DataTypes.STRING(50)
        },
        lastName: {
            type: DataTypes.STRING(50)
        },
        img: {
            type: DataTypes.STRING()
        },
        time: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        // time1: {
        //     allowNull: false,
        //     type: Sequelize.DATE,
        //     defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
        // }
    }, {
        timestamps: false,
        tableName: 'users'
    });

    User.associate = function (models) {
        User.hasMany(models.Portals, {
            foreignKey: 'userId',
            // as: 'port'
        });
        User.hasMany(models.Answers, {
            foreignKey: 'userId',
            // as: 'port'
        });
        User.belongsToMany(models.Questions, {
            through: 'users_likes',
            foreignKey: 'userId',
            timestamps: false
        })
    };

    return User;
};