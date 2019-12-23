
module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define('Questions', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(60)
        },
        query: {
            type: DataTypes.TEXT    
        },
        
    }, {
        timestamps: false,
        tableName: 'users'
    });

    Question.associate = function (models) {
        Question.hasMany(models.Portals, {
            foreignKey: 'userId',
            // as: 'orders'
        });
    };

    return Question;
};