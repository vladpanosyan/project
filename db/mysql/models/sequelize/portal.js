
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
        }
        
    }, {
        timestamps: false,
        tableName: 'portals'
    });

    Portal.associate = function (models) {
        Portal.belongsTo(models.Users, {
            foreignKey: 'userId',
            // as: 'customers'
        });
    };

    return Portal;
};