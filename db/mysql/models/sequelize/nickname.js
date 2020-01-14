
module.exports = (sequelize, Sequelize) => {
    const Nickname = sequelize.define('Nicknames', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50),
            unique: {
                args: true,
                msg: 'The nickName that You entered is already exist'
            },
        },
        image: {
            type: Sequelize.STRING(255),
        }
        
    }, {
        timestamps: false,
        tableName: 'nicknames'
    });

    Nickname.associate = function (models) {
        Nickname.belongsTo(models.Portals, {
            foreignKey: 'portalId',
            // as: 'customers'
        });
        Nickname.belongsToMany(models.Portals, {
            through: 'nicks_portals',
            foreignKey: 'nicknameId',
            timestamps: false
        })
        
        Nickname.hasMany(models.Questions, {
            foreignKey: 'nicknameId',
            // as: 'customers'
        });
        Nickname.belongsToMany(models.Questions, {
            through: 'nicks_likes',
            foreignKey: 'nicknameId',
            timestamps: false
        })

    };

    return Nickname;
};