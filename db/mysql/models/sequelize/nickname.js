
module.exports = (sequelize, Sequelize) => {
    const Nickname = sequelize.define('Nicknames', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50),
            // unique: {
            //     args: true,
            //     msg: 'The nickName that You entered is already exist'
            // },
        },
        image: {
            type: Sequelize.STRING(255),
        }
        
    }, {
        timestamps: false,
        tableName: 'nicknames',
        indexes: [{
            unique: true,
            fields: ['name', 'portalId'],
            msg: 'The nickName that You entered is already exist'
        }]
    });

    Nickname.associate = function (models) {
        Nickname.belongsTo(models.Portals, {
            foreignKey: 'portalId',
            as: 'nickToPortal'
        });
        
        Nickname.hasMany(models.Questions, {
            foreignKey: 'nicknameId',
            as: 'question'
        });

        Nickname.hasMany(models.Nick_likes, {
            as: 'nicknameManyLikes',
            foreignKey: 'nicknameId'
        })

        Nickname.belongsToMany(models.Questions, {
            as: 'nick_like',
            through: 'nicks_likes',
            foreignKey: 'nicknameId',
            timestamps: false
        })

    };

    return Nickname;
};