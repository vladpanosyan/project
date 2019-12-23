
module.exports = (sequelize, DataTypes) => {
    var Question = sequelize.define('Questions', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        question: {
            type: DataTypes.TEXT
        },
        isDeleted: {
            type: DataTypes.BOOLEAN    
        },
        time: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        
    }, {
        timestamps: false,
        tableName: 'questions'
    });

    Question.associate = function (models) {
        Question.belongsTo(models.Portals, {
            foreignKey: 'portalId',
        });
        Question.belongsTo(models.Nicknames, {
            foreignKey: 'nicknameId',
        });
        Question.belongsToMany(models.Nicknames, {
            through: 'nicks_likes',
            foreignKey: 'questionId',
            timestamps: false
        })
        Question.belongsToMany(models.Users, {
            through: 'users_likes',
            foreignKey: 'questionId',
            timestamps: false
        })
        Question.hasMany(models.Answers, {
            foreignKey: 'questionId'
        })
    };

    return Question;
};