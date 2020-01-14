
module.exports = (sequelize, Sequelize) => {
    var Portal = sequelize.define('Portals', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50)
        },
        token: {
            type: Sequelize.STRING
        },
        start: {
            type: Sequelize.DATE
        },
        private: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        isStarted: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        isFinished: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        private: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        }
    }, {
        timestamps: false,
        tableName: 'portals'
    });

    Portal.associate = function (models) {
        Portal.belongsTo(models.Users, {
            foreignKey: 'userId',
            // as:
        });
        Portal.belongsToMany(models.Nicknames, {
            through: 'nicks_portals',
            foreignKey: 'portalId'
        });
        Portal.hasMany(models.Nicknames, {
            foreignKey: 'portalId'
        })
        Portal.hasMany(models.Questions, {
            foreignKey: 'portalId'
        })
    };

    return Portal;
};