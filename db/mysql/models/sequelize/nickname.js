
module.exports = (sequelize, Sequelize) => {
    const Nickname = sequelize.define('Nicknames', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50)
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
    };

    return Nickname;
};